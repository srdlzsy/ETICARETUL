// category.component.ts
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/categoty';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  title: string = "Category";
  categories: Category[] = [];

  constructor( public categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  selectCategory(categoryId: number): void {
    this.categoryService.selectCategory(categoryId); // Seçilen kategori ID'sini servis aracılığıyla ilet
 
  
 
  }}
