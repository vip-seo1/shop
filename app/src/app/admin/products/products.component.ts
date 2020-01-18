import { Component, OnInit } from '@angular/core';
import { DataSourceService, Product } from 'src/app/model/data-source.service';
import { AuthService } from 'src/app/admin/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private ds:  DataSourceService,
    private as: AuthService ) { }
    
  productList: Product[] = [];

  ngOnInit() {
    this.ds.getProduct().subscribe((products: Product[]) => {
      this.productList = products;
    });
  }
  
  getProduct(): Product[] {
    return this.productList;
  }

  logout() {
    this.as.isAuth = false;
  }

  del(id:number) {
    this.ds.deleteProduct(id).subscribe(() => {
      this.ds.getProduct().subscribe((products: Product[]) => {
        this.productList = products;
       });
     });
  }
}
