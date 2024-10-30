import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { ScrollService } from '../.././services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private cleanupScrollEffect!: () => void;

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit(): void {
    this.cleanupScrollEffect = this.scrollService.initializeScrollEffect();
  }

  ngOnDestroy(): void {
    if (this.cleanupScrollEffect) {
      this.cleanupScrollEffect();
    }
  }
}
