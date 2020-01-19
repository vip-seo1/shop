import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Product {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public description: string,
    public price: number
  ) { }
}

@Injectable()
export class DataSourceService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products')
  }
  
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`)
  }

  deleteProduct(id: number): Observable<Product[]> {
    return this.http.delete<Product[]>(`http://localhost:3000/products/${id}`)
  }

  addProduct(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>('http://localhost:3000/products', product)
  }

  public editProduct(body: Product): Observable<void> {
    return this.http.put<void>(`http://localhost:3000/products/${body.id}`, body);
  } 
}