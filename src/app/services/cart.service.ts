import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCartItems(): Product[] {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
}
