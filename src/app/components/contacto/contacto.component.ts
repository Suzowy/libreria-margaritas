import { Component, OnInit, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, AfterViewInit {
  public widthSlider!: number;
  public anchuraToSlider!: any;
  public autor: any;
  public email: string = 'margaritas-a-medianoche@gmail.com';
  showSuccessMessage: boolean | undefined;

  // Variables para el scroll
  private isScrolling = false;
  private currentSectionIndex = 0;
  private sections: HTMLElement[] = [];
  private containElement!: HTMLElement;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    this.email = 'margaritas-a-medianoche@gmail.com';
  }

  ngAfterViewInit(): void {
    // Inicializar las secciones para el scroll
    this.sections = Array.from(this.elRef.nativeElement.querySelectorAll('.section'));
    this.containElement = this.elRef.nativeElement.querySelector('.contain');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });

      if (this.isLastSectionInView()) {
        this.disableScrollSnap();
      } else {
        this.enableScrollSnap();
      }
    }, { threshold: 0.1 });

    this.sections.forEach(section => observer.observe(section));
  }

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent): void {
    if (this.isScrolling) {
      return;
    }

    this.isScrolling = true;

    if (event.deltaY > 0) {
      if (this.currentSectionIndex < this.sections.length - 1) {
        this.currentSectionIndex++;
        this.sections[this.currentSectionIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      if (this.currentSectionIndex > 0) {
        this.currentSectionIndex--;
        this.sections[this.currentSectionIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }

    if (this.isLastSectionInView()) {
      this.disableScrollSnap();
    } else {
      this.enableScrollSnap();
    }

    setTimeout(() => {
      this.isScrolling = false;
    }, 800);
  }

  private isLastSectionInView(): boolean {
    const lastSection = this.sections[this.sections.length - 1];
    const rect = lastSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    return rect.bottom <= viewportHeight;
  }

  private enableScrollSnap(): void {
    this.containElement.style.scrollSnapType = 'y mandatory';
  }

  private disableScrollSnap(): void {
    this.containElement.style.scrollSnapType = 'none';
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
