import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product'; // Product modelini referans alıyoruz

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl =  'https://localhost:7136/api/Product';  // Ürünlerin alındığı API URL'si

  constructor(private http: HttpClient) {}

  // Tüm ürünleri almak için bir metod
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Tek bir ürünü ID'sine göre almak için bir metod
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  // Ürün eklemek için metod
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  // Ürünü güncellemek için metod
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  // Ürünü silmek için metod
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

