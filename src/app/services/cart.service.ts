import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  calculateTotal(): number {
    throw new Error('Method not implemented.');
  }
  private cart: { name: string; price: number; quantity: number }[] = [];

  constructor() {}


  addToCart(product: { name: string; price: number }) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1; // Aumentar cantidad
    } else {
      this.cart.push({ ...product, quantity: 1 }); // Agregar nuevo
    }
  }


  getCart() {
    return this.cart;
  }


  removeFromCart(product: { name: string }) {
    const item = this.cart.find(item => item.name === product.name);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.cart = this.cart.filter(item => item.name !== product.name);
      }
    }
  }


  clearCart() {
    this.cart = [];
  }


  get total() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
