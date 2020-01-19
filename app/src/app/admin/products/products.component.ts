import { Component, OnInit } from '@angular/core';
import { DataSourceService, Product } from 'src/app/model/data-source.service';
import { AuthService } from 'src/app/admin/auth.service';
import { EditProductDialogComponent } from '../edit-product-dialog/edit-product-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  statusProduct:boolean = true;
  statusOrder:boolean = false;  
  
  constructor(
    private ds:  DataSourceService,
    private as: AuthService,
    private dialog: MatDialog ) { }
    
  productList: Product[] = [];

  ngOnInit() {
    this.ds.getProducts().subscribe((products: Product[]) => {
      this.productList = products;
    });
  }
    
    
  
  public toggle() {
    this.statusProduct = !this.statusProduct;
    this.statusOrder = !this.statusOrder;
  }

  getProduct(): Product[] {
    return this.productList;
  }

  logout() {
    this.as.isAuth = false;
  }

  
  public edit(id: number): void {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      data: id,
      width: '500px'
    });
    dialogRef.afterClosed().subscribe((condition: boolean) => {
      if (condition){
        this.getProduct();
      }
      this.ds.getProducts().subscribe((products: Product[]) => {
        this.productList = products;
       });
    })
  }

  del(id:number) {
    this.ds.deleteProduct(id).subscribe(() => {
      this.ds.getProducts().subscribe((products: Product[]) => {
        this.productList = products;
       });
     });
  }
}
