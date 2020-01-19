import { Component, OnInit } from '@angular/core';
import { DataSourceService, Product } from 'src/app/model/data-source.service';
import { OrderService } from 'src/app/model/order.service';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  statusProduct:boolean = false;
  statusOrder:boolean = true;  

  constructor(private os:  OrderService ) { }
  orderList: Order[] = [];
 

  ngOnInit() {
    this.os.getOrders().subscribe((orders: Order[]) => {
      this.orderList = orders;
     });
  }

  public toggle() {
    this.statusProduct = !this.statusProduct;
    this.statusOrder = !this.statusOrder;
  }

  delOrder(id:number) {
    this.os.deleteOrder(id).subscribe(() => {
      this.os.getOrders().subscribe((orders: Order[]) => {
        this.orderList = orders;
       });
     });
  }
}
