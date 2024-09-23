import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotras',
  templateUrl: './sobre-nosotras.component.html',
  styleUrls: ['./sobre-nosotras.component.css']
})
export class SobreNosotrasComponent implements AfterViewInit {
  private isScrolling = false;
  private currentSectionIndex = 0;
  private sections: HTMLElement[] = [];
  private containElement!: HTMLElement;

  ngAfterViewInit(): void {
    this.sections = Array.from(document.querySelectorAll('.section'));
    this.containElement = document.querySelector('.contain') as HTMLElement;

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
      // Scroll hacia abajo
      if (this.currentSectionIndex < this.sections.length - 1) {
        this.currentSectionIndex++;
        this.sections[this.currentSectionIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      // Scroll hacia arriba
      if (this.currentSectionIndex > 0) {
        this.currentSectionIndex--;
        this.sections[this.currentSectionIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }

    // Deshabilitar scroll snap si estamos en la última sección
    if (this.isLastSectionInView()) {
      this.disableScrollSnap();
    } else {
      this.enableScrollSnap();
    }

    // Espera antes de permitir otro scroll
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
    this.containElement.style.scrollSnapType = 'y mandatory'; // Habilita scroll snap
  }

  private disableScrollSnap(): void {
    this.containElement.style.scrollSnapType = 'none'; // Desactiva scroll snap
  }
}
