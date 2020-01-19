import { Component, OnInit } from '@angular/core';
import { Product, DataSourceService } from '../../model/data-source.service';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})

export class StoreComponent implements OnInit {
  form: FormGroup;
  productList: Product[] = [];
  categories: Set < string > | string[] = [];
  currentCategory: null;
  currentPage: number = 1;
  itemsPerPage: number = 4;
  

  constructor(
    private ds: DataSourceService,
    private router: Router,
    public cartService: CartService
    ) {}

  ngOnInit() {
    this.ds.getProducts().subscribe((products: Product[]) => {
      this.productList = products;
      const temp = products.map((p) => p.category);
      this.categories = new Set(temp);
    });
    this.form = new FormGroup ({
      name: new FormControl('', Validators.required),
    });
  }
  
  setCurrentCategory(n: any) {
    this.currentCategory = n;
    this.currentPage = 1;
  }
  
  getCurrentCategory() {
    return this.currentCategory;
  }

  getCurrentPage() {
    return this.currentPage;
  }
  
  getProduct(page: number) {
    
    if(page != undefined) {
      this.currentPage = page; 
    }
   
    let begin = (this.currentPage - 1) * this.itemsPerPage;
    let end = this.currentPage * this.itemsPerPage;

    if (this.currentCategory == null) {
        return this.productList.slice(begin, end);
    } else {
        return this.productList.filter((product) => product.category === this.currentCategory).slice(begin, end);
    }
  }

  getPaginationPageCount() {
    let arr = [];
    let total: number = 0;

    if (this.currentCategory == null) {
      total = Math.ceil(this.productList.length/this.itemsPerPage);
    } else {
      total = Math.ceil(this.productList.filter((product) => product.category === this.currentCategory).length/this.itemsPerPage);
    }

    for ( let i = 0; i < total; i++) {
      arr[i] = i + 1;
    } 

    return arr;
  }
  
  addToCart(product: Product) {
    this.cartService.addProductLine(product);
    this.router.navigate(['/cart']);
  }
  
  changeItem(e) {
   this.itemsPerPage = this.form.get('name').value;
  }
  
}
