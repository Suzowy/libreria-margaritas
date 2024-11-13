import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getTotal(): number {
    throw new Error('Method not implemented.');
  }
  private cart: { name: string; price: number; quantity: number }[] = [];

  constructor() {}

  addToCart(product: { name: string; price: number }) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(product: { name: string }) {
    this.cart = this.cart.filter(item => item.name !== product.name);
  }

  decreaseQuantity(product: { name: string }) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity -= 1;
      if (existingProduct.quantity <= 0) {
        this.removeFromCart(product);
      }
    }
  }

  get total() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
