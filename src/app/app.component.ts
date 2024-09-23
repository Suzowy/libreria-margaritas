import { Component, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { ScrollService } from './services/scroll.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private cleanupScrollEffect!: () => void;
  showScrollToTopButton = false;

  constructor(private scrollService: ScrollService, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.cleanupScrollEffect = this.scrollService.initializeScrollEffect();
    }
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
    if (isPlatformBrowser(this.platformId)) {
      const cabeceraElement = document.getElementById('cabecera');
      if (cabeceraElement) {
        cabeceraElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
