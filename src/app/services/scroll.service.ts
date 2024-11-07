import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private currentSectionIndex = -1; // comienza antes de la primera sección
  private sections!: NodeListOf<HTMLElement>;
  private isScrolling = false;
  private cleanupScrollEffect!: () => void;

  constructor() {}

  initializeScrollEffect() {
    // Seleccionamos las secciones de la página
    this.sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(this.sections).indexOf(entry.target as HTMLElement);
            this.currentSectionIndex = index;
          }
        });
      },
      { threshold: 0.5 } // Ajustar el umbral para una detección más precisa
    );

    this.sections.forEach((section) => observer.observe(section));

    // Eventos de desplazamiento
    window.addEventListener('wheel', this.handleScroll);
    window.addEventListener('keydown', this.handleKeyPress);

    // Limpieza de eventos y observer
    this.cleanupScrollEffect = () => {
      window.removeEventListener('wheel', this.handleScroll);
      window.removeEventListener('keydown', this.handleKeyPress);
      observer.disconnect();
    };

    // Lleva al usuario a la cabecera al cargar la página
    this.scrollToSection(-1);

    return this.cleanupScrollEffect;
  }

  private handleScroll = (event: WheelEvent) => {
    if (this.isScrolling) return;
    this.isScrolling = true;

    const direction = event.deltaY > 0 ? 1 : -1;
    this.scrollToSection(this.currentSectionIndex + direction);

    setTimeout(() => (this.isScrolling = false), 800);
  };

  private handleKeyPress = (event: KeyboardEvent) => {
    if (this.isScrolling) return;
    this.isScrolling = true;

    const direction = event.key === 'ArrowDown' ? 1 : event.key === 'ArrowUp' ? -1 : 0;
    if (direction !== 0) {
      this.scrollToSection(this.currentSectionIndex + direction);
    }

    setTimeout(() => (this.isScrolling = false), 800);
  };

  private scrollToSection(index: number) {
    // Asegura que el índice esté dentro del rango
    if (index < -1 || index >= this.sections.length) return;

    if (index === -1) {
      // Navega a la cabecera
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.currentSectionIndex = index;
      return;
    }

    // Desplázate a la siguiente o anterior sección
    this.sections[index].scrollIntoView({ behavior: 'smooth' });
    this.currentSectionIndex = index;
  }
}
