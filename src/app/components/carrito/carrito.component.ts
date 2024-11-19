import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cart: any[] = [];
  total = 0;
  showCart = false;

  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
      this.total = this.cartService.total; // Actualiza el total cuando cambia el carrito
    });
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
  }

  increaseQuantity(product: any) {
    this.cartService.addToCart(product);
  }

  decreaseQuantity(product: any) {
    this.cartService.decreaseQuantity(product);
  }

  checkout() {
    this.closeMenuAndCart();
    this.router.navigate(['/pago']);
  }

  continueShopping() {
    this.closeMenuAndCart();
    this.router.navigate(['/libreria']);
  }

  private closeMenuAndCart(): void {
    const menuItems = document.querySelector('header ul');
    const menuToggle = document.getElementById('checkbox') as HTMLInputElement;
    if (menuItems && menuToggle && menuToggle.checked) {
      menuItems.classList.remove('show');
      menuToggle.checked = false;
    }

    this.showCart = false;
  }
}
