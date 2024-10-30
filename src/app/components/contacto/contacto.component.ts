import { Component, OnInit, AfterViewInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScrollService } from '../.././services/scroll.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, AfterViewInit, OnDestroy {  // Agrega OnDestroy aquí
  public widthSlider!: number;
  public anchuraToSlider!: any;
  public autor: any;
  public email: string = 'margaritas-a-medianoche@gmail.com';
  showSuccessMessage: boolean | undefined;

  // Variables para el scroll
  private cleanupScroll!: () => void; // Para almacenar la función de limpieza de scroll

  constructor(private elRef: ElementRef, private scrollService: ScrollService) {}

  ngOnInit() {
    this.email = 'margaritas-a-medianoche@gmail.com';
  }

  ngAfterViewInit(): void {
    // Inicializa el efecto de scroll y almacena la función de limpieza
    this.cleanupScroll = this.scrollService.initializeScrollEffect();
  }

  ngOnDestroy(): void {
    // Llama a la función de limpieza del scroll cuando el componente se destruya
    if (this.cleanupScroll) {
      this.cleanupScroll();
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.showSuccessMessage = true;
      form.reset();
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    } else {
      console.log('Formulario no válido');
    }
  }
}
