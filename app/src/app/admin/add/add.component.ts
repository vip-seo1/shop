import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product, DataSourceService } from 'src/app/model/data-source.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form: FormGroup;
  
  constructor(private ds: DataSourceService, private router: Router ) { }

  ngOnInit() {
    
    this.form = new FormGroup ({
      product_name: new FormControl('', Validators.required),
      product_category: new FormControl('', Validators.required),
      product_description: new FormControl('', Validators.required),
      product_price: new FormControl('', Validators.required)
    });
  }

  save() {
       const product = new Product(11,
         this.form.get('product_name').value, 
         this.form.get('product_category').value,
         this.form.get('product_description').value,
         +this.form.get('product_price').value,
       );
       this.ds.addProduct(product).subscribe(() =>{
       this.router.navigate(['/products']);
       alert('success');
             },
             () => {
               alert('error');
             });
           
  }
}
