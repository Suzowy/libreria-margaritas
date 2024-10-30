import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private currentSectionIndex = -1; // antes de la primera sección
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
            this.applyTransitionEffect(index);
          }
        });
      },
      { threshold: 0.1 }
    );


    this.sections.forEach((section) => observer.observe(section));


    window.addEventListener('wheel', this.handleScroll);
    window.addEventListener('keydown', this.handleKeyPress);

    this.cleanupScrollEffect = () => {
      window.removeEventListener('wheel', this.handleScroll);
      window.removeEventListener('keydown', this.handleKeyPress);
    };

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
    // Permitir desplazamiento hacia la cabecera
    if (index < -1 || index >= this.sections.length) return;

    if (index === -1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.currentSectionIndex = index;
      return;
    }

    this.applyTransitionEffect(index);
    this.sections[index].scrollIntoView({ behavior: 'smooth' });
    this.currentSectionIndex = index;
  }

  private applyTransitionEffect(index: number) {
    this.sections.forEach((section, i) => {
      if (i === index) {
        section.classList.add('entering');
        section.classList.remove('exiting');
      } else if (i < index) {
        section.classList.add('exiting');
        section.classList.remove('entering');
      } else {
        section.classList.remove('entering', 'exiting');
      }
    });
  }
}
