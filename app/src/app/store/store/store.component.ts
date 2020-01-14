import {
  Component,
  OnInit
} from '@angular/core';
import {
  Product,
  DataSourceService
} from '../../model/data-source.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  productList: Product[] = [];
  categories: Set < string > | string[] = [];
  currentCategory: null;

  constructor(private ds: DataSourceService) {}

  ngOnInit() {
      if (this.currentCategory == null) {
    this.ds.getProduct().subscribe((products: Product[]) => {
      this.productList = products;
      const temp = products.map((p) => p.category);
      this.categories = new Set(temp);
    });
  } else {this.getProduct();}
    }

     getCategory(n:any){
       this.currentCategory = n;
     }
     
   getProduct(): Product[] {
     
        return this.productList.filter((product) => product.category === this.currentCategory);
      
    }
}
