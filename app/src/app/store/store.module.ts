import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [StoreComponent, CartComponent, CheckoutComponent],
  imports: [
    CommonModule,
    ModelModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class StoreModule { }
