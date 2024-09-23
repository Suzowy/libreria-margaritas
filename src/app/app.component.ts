import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private cleanupScrollEffect!: () => void;
  showScrollToTopButton = false;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.cleanupScrollEffect = this.scrollService.initializeScrollEffect();
  }

  ngOnDestroy() {
    if (this.cleanupScrollEffect) {
      this.cleanupScrollEffect();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollThreshold = 400;
    this.showScrollToTopButton = window.scrollY > scrollThreshold;
  }

  // Función para desplazar suavemente la página hasta el elemento con ID 'cabecera'
  scrollToTop(): void {
    const cabeceraElement = document.getElementById('cabecera');
    if (cabeceraElement) {
      cabeceraElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
