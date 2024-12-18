import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { name: string; price: number; quantity: number }[] = [];
  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.cart);

  constructor() {}

  addToCart(product: { name: string; price: number }) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.cartSubject.next(this.cart);
  }

  getCart() {
    return this.cartSubject.asObservable();
  }

  removeFromCart(product: { name: string }) {
    this.cart = this.cart.filter(item => item.name !== product.name);
    this.cartSubject.next(this.cart);
  }

  decreaseQuantity(product: { name: string }) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity -= 1;
      if (existingProduct.quantity <= 0) {
        this.removeFromCart(product);
      } else {
        this.cartSubject.next(this.cart); // Notificar al cambio
      }
    }
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }

  get total() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
