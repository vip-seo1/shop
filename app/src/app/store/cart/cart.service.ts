import { Injectable } from '@angular/core';
import { Line } from '../../model/line.model';
import { Product } from '../../model/data-source.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productLines: Line[] = [];
  total: number;
  product_number: number;
  
  
  
  constructor() {}
  
  clear() {
    this.productLines = [];
    this.total = 0;
  }

  getProductLines(): Line[] {
    return this.productLines;
  }
  
  deleteLine(id: number) {
    this.productLines = this.productLines.filter((line: Line) => line.id !== id);
    this.product_number = this.product_number - 1;
  }
 
  addProductLine(product: Product) {
    const line = new Line (
      product.name,
      1,
      product.price,
      this.calculateSubTotal(1, product.price),
      product.id
    );
    this.productLines.push(line);
    this.total = this.calculateTotal(); 
    this.product_number = this.productLines.length;
  }

  getTotal(): number{
    return this.total;
  }

  getCart(): number {
    return this.product_number;
  }

  private calculateSubTotal(quantiry, price): number {
    return price * quantiry;
  }

  public calculateTotal(): number {
    return this.total = this.productLines.map(line => line.subtotal).reduce((a, b) => a + b, 0);
  }
}
 {}