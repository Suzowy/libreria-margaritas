import { Component, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollService } from './services/scroll.service';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private cleanupScrollEffect!: () => void;
  showScrollToTopButton = false;
isLoading: any;

  constructor(
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.cleanupScrollEffect = this.scrollService.initializeScrollEffect();
    }

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      console.log('Navegación completada');
      setTimeout(() => this.scrollToTop(), 0);
    });
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

  scrollToTop(): void {
    console.log('Desplazando al inicio de la página');
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
