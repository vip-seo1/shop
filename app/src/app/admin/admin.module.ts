import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [LoginComponent, ProductsComponent, OrdersComponent, AddComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ]
})
export class AdminModule { }
