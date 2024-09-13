import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/categoty';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = "https://localhost:7136/api/Category"; // API URL'nizi buraya koyun

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/${category.categoryId}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  private selectedCategorySource = new BehaviorSubject<number | null>(null); // Kategori ID'yi saklar
  selectedCategory$ = this.selectedCategorySource.asObservable(); // Diğer bileşenlerin bu observable'a abone olmasını sağlar

 


  selectCategory(categoryId: number | null): void {
    this.selectedCategorySource.next(categoryId); // Kategori ID'sini veya null'ı günceller
  }
 
}


