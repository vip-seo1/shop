import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  addOrder(order: Order): Observable<any>{
    return this.http.post('http://localhost:3000/orders', order);
  }
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }
  deleteOrder(id: number): Observable<Order[]> {
    return this.http.delete<Order[]>(`http://localhost:3000/orders/${id}`)
  }
}

