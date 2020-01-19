import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { AddComponent } from './add/add.component';
import { EditProductDialogComponent } from './edit-product-dialog/edit-product-dialog.component';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [LoginComponent, ProductsComponent, OrdersComponent, AddComponent, EditProductDialogComponent],
  entryComponents: [
    EditProductDialogComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ]
})
export class AdminModule { }
