import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DataSourceService, Product } from 'src/app/model/data-source.service';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss']
})
export class EditProductDialogComponent implements OnInit {
  public myForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
    private ds: DataSourceService
    ) {}
  

  ngOnInit() {
  
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    });
    this.ds.getProduct(this.id).subscribe((product: Product) => {
      this.myForm.patchValue(product);
    }
   )
  }

  public  updateProduct(): void {
  
    const product = new Product (
      this.id,
      this.myForm.get('name').value,
      this.myForm.get('category').value,
      this.myForm.get('description').value,
      this.myForm.get('price').value
        );
    this.ds.editProduct(product).subscribe(() => {this.dialogRef.close(true)});
  }
}
