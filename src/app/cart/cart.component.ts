import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,  // Bu kısım standalone bileşen olarak işaretler
  imports: [CommonModule] // CommonModule'u doğrudan ekliyoruz
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];
  isCartOpen: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }
  toggleCart() {
    this.isCartOpen = !this.isCartOpen;  // Sepeti açıp kapatır
  }
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

}
