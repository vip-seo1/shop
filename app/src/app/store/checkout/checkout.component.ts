import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderService } from 'src/app/model/order.service';
import { Order } from 'src/app/model/order.model';
import { CartService } from '../cart/cart.service';
import { Client } from 'src/app/model/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  form: FormGroup;
  

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private router: Router
    ) { }

  ngOnInit() {

    this.form = new FormGroup ({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }
  
   send() {
     if (this.form.valid) {
       const lines = this.cartService.getProductLines();
       const total = this.cartService.getTotal();
       const client = new Client(this.form.get('name').value, this.form.get('address').value);
       const order = new Order(lines, total, client);
       this.orderService.addOrder(order).subscribe(() =>{
         this.cartService.clear();
        this.router.navigate(['/store']);
        alert('success');
              },
              () => {
                alert('error');
              });
            } 
   }
  
}
