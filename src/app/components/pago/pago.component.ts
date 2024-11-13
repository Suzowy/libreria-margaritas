import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  totalCompra: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Usamos la propiedad total del servicio CartService para obtener el total de la compra
    this.totalCompra = this.cartService.total;
  }

  processPayment(): void {
    // Lógica para procesar el pago
    alert('Pago realizado');
  }
}
