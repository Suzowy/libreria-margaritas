import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  cart: any[] = []; // Array para almacenar los productos del carrito
  totalCompra: number = 0; // Variable para el total de la compra
  mensajeConstruccion: string | undefined;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    // Suscripción para obtener los productos del carrito
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
      this.totalCompra = this.cartService.total; // Obtener el total del carrito
    });
  }

  // Añadir el método continueShopping en PagoComponent
continueShopping(): void {
  // Aquí puedes redirigir a la página de la librería o donde sea necesario
  this.router.navigate(['/libreria']);
}


  processPayment(): void {
     // Mostrar mensaje de que la página está en construcción
       this.mensajeConstruccion = 'La página de pago todavía está en construcción. Por favor, inténtelo más tarde.';

    // Limpiar el carrito después del pago
    this.cartService.clearCart();

    // Restablecer el total de la compra a 0 después de limpiar el carrito
    this.totalCompra = 0;
  }
}
