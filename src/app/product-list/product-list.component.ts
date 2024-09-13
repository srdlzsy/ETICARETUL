// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../services/cart.service'; // CartService dahil edildi
import { CategoryService } from '../services/category.service';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule, CategoryComponent]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery: string = '';
  selectedCategory: number | null = null; // Seçilen kategori ID'si

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: CartService // CartService inject edildi
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filterProducts(); // İlk yüklemede filtreleme yap
    });

     // Kategori değişimini dinle
     this.categoryService.selectedCategory$.subscribe(categoryId => {
      this.selectedCategory = categoryId;
      this.filterProducts(); // Kategori değişince filtreleme yap
    });
  }

  // Ürünleri filtrele
// Ürünleri filtrele
filterProducts(): void {
  this.filteredProducts = this.products.filter(p =>
    (p.productName.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
     (this.selectedCategory === null || p.categoryId === this.selectedCategory))
  );
}

 
  

  addToCart(product: Product): void {
    this.cartService.addToCart(product); // CartService ile sepete ürün ekle
    console.log(`${product.productName} sepete eklendi.`);
  }

  onSearch(): void {
    this.filterProducts(); // Arama yapıldığında ürünleri filtrele
  }
}
