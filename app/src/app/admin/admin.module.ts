import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [LoginComponent, ProductsComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
