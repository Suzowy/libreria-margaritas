import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cart: any[] = [];
  total = 0;
  showCart = false;


  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.calculateTotal();
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }

  removeFromCart(product: any) {
    console.log('Removiendo del carrito:', product);
    this.cartService.removeFromCart(product);
    this.cart = this.cartService.getCart();
  }


  checkout() {
    console.log("Compra finalizada:", this.cart);
    this.cart = [];
    this.total = 0;

    this.cartService.clearCart();
    this.cart = this.cartService.getCart();
  }


}
