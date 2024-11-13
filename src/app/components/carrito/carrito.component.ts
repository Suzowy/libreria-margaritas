import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  cart: any[] = [];
  total = 0;
  showCart = false;

  constructor(
    public cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateCart();
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }

  updateCart() {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.total; // Usa el getter de total directamente
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.updateCart();
  }

  increaseQuantity(product: any) {
    this.cartService.addToCart(product); // Reutiliza la lógica de agregar para incrementar
    this.updateCart();
  }

  decreaseQuantity(product: any) {
    this.cartService.decreaseQuantity(product); // Nuevo método para reducir cantidad en el servicio
    this.updateCart();
  }

  checkout() {
    this.router.navigate(['/pago']);
  }
}


