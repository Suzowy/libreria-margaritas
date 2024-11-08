import { Component } from '@angular/core';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css'],
})
export class PagoComponent {
  totalAmount: number = 100; // Ajusta según tu lógica de carrito

  processPayment() {
    alert('Pago procesado con éxito!');
  }
}
