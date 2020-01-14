import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  form: FormGroup;
  

  constructor() { }

  ngOnInit() {

    this.form = new FormGroup ({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }
  
   getCheckout() { 
     
    }
  
}
