import { Component, OnInit, PLATFORM_ID, Inject, HostListener } from '@angular/core';
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

  // Escuchar clics en todo el documento para cerrar el menú si el clic es fuera del header
  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent): void {
    const menuItems = document.querySelector('header ul');
    const menuToggle = document.getElementById('checkbox') as HTMLInputElement;
    const header = document.querySelector('header');

    // Verifica si el clic es fuera del header o del menú
    if (header && !header.contains(event.target as Node)) {
      if (menuItems && menuToggle && menuToggle.checked) {
        menuItems.classList.remove('show');
        menuToggle.checked = false; // Desmarcar el checkbox para cerrar el menú
      }
    }
  }

  // Lógica adicional para cerrar el menú cuando se hace clic en los enlaces o botones dentro del header
  public closeMenuOnClick(): void {
    const menuItems = document.querySelector('header ul');
    // Cerrar el menú cuando se haga clic en los enlaces dentro del header
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

    // Cerrar el menú cuando se haga clic en el botón de pagar
    const payButton = document.querySelector('.Btn');
    if (payButton) {
      payButton.addEventListener('click', () => {
        if (menuItems) {
          menuItems.classList.remove('show');
          const checkbox = document.getElementById('checkbox') as HTMLInputElement;
          if (checkbox) {
            checkbox.checked = false;
          }
        }
      });
    }
  }
}
