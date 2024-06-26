import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public widthSlider!: number;
  public anchuraToSlider!: any;
  public autor: any;
  public email: string = 'margaritas-a-medianoche@gmail.com';
  showSuccessMessage: boolean | undefined;
  constructor() {

  }

  ngOnInit() {
    this.email = 'margaritas-a-medianoche@gmail.com';
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
