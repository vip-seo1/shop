import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './cart.service';
import { Line } from 'src/app/model/line.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
list: Line[] = [];
form: FormGroup;
  
  constructor(
    
  public cartService: CartService,
  private router: Router   
  ) { }

  ngOnInit() {
    this.list = this.cartService.getProductLines();
    this.form = new FormGroup ({
      quantity: new FormControl('', Validators.required),
    });
  }

addProductLine(product) { 
  this.cartService.addProductLine(product);
}

delProductLine(product) { 
  this.cartService.delProductLine(product);
}

  backToHome() {
    this.router.navigate(['/']);
  }
   
  deleteLine(id: number) {
    this.cartService.deleteLine(id);
    this.cartService.calculateTotal();
    this.list = this.cartService.getProductLines();
  }

  public changeQuantity(price) {
   return this.cartService.calculateSubTotal(this.form.get('quantity').value, price);
  }
}
