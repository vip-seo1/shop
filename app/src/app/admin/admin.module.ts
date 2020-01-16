import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, ProductsComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ]
})
export class AdminModule { }
