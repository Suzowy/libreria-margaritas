import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-sobre-nosotras',
  templateUrl: './sobre-nosotras.component.html',
  styleUrls: ['./sobre-nosotras.component.css']
})
export class SobreNosotrasComponent implements AfterViewInit, OnDestroy {
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
