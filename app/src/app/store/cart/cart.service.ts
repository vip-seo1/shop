import { Injectable } from '@angular/core';
import { Line } from '../../model/line.model';
import { Product } from '../../model/data-source.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productLines: Line[] = [];
  total: number;
  
  
  
  
  constructor() {}

  getProductLines(): Line[] {
    return this.productLines;
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
  }

  getTotal(): number{
    return this.total;
  }

  private calculateSubTotal(quantiry, price): number {
    return price * quantiry;
  }
  private calculateTotal(): number {
    return this.total = this.productLines.map(line => line.subtotal).reduce((a, b) => a + b, 0);
  }

  
}
 {}