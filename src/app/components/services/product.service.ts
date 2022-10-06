import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  base_url = environment.api_url;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base_url + 'api/Product');
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.base_url + 'api/Product', product);
  }

  editProduct(id: string, updateProduct: Product): Observable<Product> {
    return this.http.put<Product>(this.base_url + `api/Product/${id}`,updateProduct);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.base_url + `api/Product/${id}`)
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(this.base_url + `api/Product/${id}`);
  }
}
