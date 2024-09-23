import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private currentSectionIndex = 0;
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
      {
        threshold: 0, // Se activa cuando la parte superior de la nueva sección es visible
        rootMargin: '0px' // Ajuste para activar la intersección justo cuando se muestra la nueva sección
      }
    );

    this.sections.forEach((section) => {
      observer.observe(section);
    });

    const handleScroll = this.handleScroll.bind(this);
    const handleKeyPress = this.handleKeyPress.bind(this);

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleKeyPress);

    this.cleanupScrollEffect = () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };

    return this.cleanupScrollEffect;
  }

  private handleScroll(event: WheelEvent) {
    if (this.isScrolling) return;
    this.isScrolling = true;

    if (event.deltaY > 0) {
      this.scrollToSection(this.currentSectionIndex + 1);
    } else {
      this.scrollToSection(this.currentSectionIndex - 1);
    }

    setTimeout(() => {
      this.isScrolling = false;
    }, 800); // Ajusta el tiempo de espera basado en la duración de la animación
  }

  private handleKeyPress(event: KeyboardEvent) {
    if (this.isScrolling) return;
    this.isScrolling = true;

    if (event.key === 'ArrowDown') {
      this.scrollToSection(this.currentSectionIndex + 1);
    } else if (event.key === 'ArrowUp') {
      this.scrollToSection(this.currentSectionIndex - 1);
    }

    setTimeout(() => {
      this.isScrolling = false;
    },800);
  }

  private scrollToSection(index: number) {
    if (index < 0 || index >= this.sections.length) {
      this.cleanupScrollEffect();
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
