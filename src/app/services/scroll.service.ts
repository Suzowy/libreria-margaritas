import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private currentSectionIndex = -1; // comienza antes de la primera sección en la cabecera
  private sections!: NodeListOf<HTMLElement>;
  private isScrolling = false;
  private cleanupScrollEffect!: () => void;

  constructor() {}

  initializeScrollEffect() {
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
      { threshold: 0.5 }
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
    if (index < -1 || index >= this.sections.length) return;

    if (index === -1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.currentSectionIndex = index;
      return;
    }

    this.sections[index].scrollIntoView({ behavior: 'smooth' });
    this.currentSectionIndex = index;
  }
}
