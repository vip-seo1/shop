import { Component, OnInit } from '@angular/core';
import { Product, DataSourceService } from '../../model/data-source.service';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})

export class StoreComponent implements OnInit {
  productList: Product[] = [];
  categories: Set < string > | string[] = [];
  currentCategory: null;

  constructor(
    private ds: DataSourceService,
    private router: Router,
    public cartService: CartService
    ) {}

  ngOnInit() {

    this.ds.getProduct().subscribe((products: Product[]) => {
      this.productList = products;
      const temp = products.map((p) => p.category);
      this.categories = new Set(temp);
    });
  }
  
  getCategory(n: any) {
    this.currentCategory = n;
  }

  getProduct(): Product[] {
    if (this.currentCategory == null) {
      return this.productList;
    } else {
      return this.productList.filter((product) => product.category === this.currentCategory);
    }
  }
  addToCart(product: Product) {
    this.cartService.addProductLine(product);
    this.router.navigate(['/cart']);
  }
}
