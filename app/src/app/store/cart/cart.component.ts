import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './cart.service';
import { Line } from 'src/app/model/line.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
list: Line[] = [];
  
  constructor(
    
  public cartService: CartService,
  private router: Router   
  ) { }

  ngOnInit() {
    this.list = this.cartService.getProductLines();
  }

  backToHome() {
    this.router.navigate(['/']);
  }
   
  deleteLine(id: number) {
    this.cartService.deleteLine(id);
    this.cartService.calculateTotal();
    this.list = this.cartService.getProductLines();

  }
}
