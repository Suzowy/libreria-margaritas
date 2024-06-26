import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.closeMenuOnClick();
    }
  }

  closeMenuOnClick(): void {
    const menuItems = document.querySelector('header ul');
    document.querySelectorAll('header a').forEach(link => {
      link.addEventListener('click', () => {
        if (menuItems) {
          menuItems.classList.remove('show');
          const checkbox = document.getElementById('checkbox') as HTMLInputElement;
          if (checkbox) {
            checkbox.checked = false;
          }
        }
      });
    });
  }
}
