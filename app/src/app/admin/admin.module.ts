import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [LoginComponent, ProductsComponent, OrdersComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ]
})
export class AdminModule { }
