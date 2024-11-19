import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  totalCompra: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    // Usamos la propiedad total del servicio CartService para obtener el total de la compra
    this.totalCompra = this.cartService.total;
  }

  processPayment(): void {
    // Lógica para procesar el pago
    alert('Pago realizado');

    // Limpiar el carrito después del pago
    this.cartService.clearCart();

    // Restablecer el total de la compra a 0 después de limpiar el carrito
    this.totalCompra = 0;

    // Redirigir al inicio o a la página deseada
   // this.router.navigate(['/''']);  Redirigir al inicio, por ejemplo
  }
}
