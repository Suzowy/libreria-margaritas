import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
})
export class LibreriaComponent implements AfterViewInit {
  private isScrolling = false;
  private currentSectionIndex = 0;
  private sections: HTMLElement[] = [];
  private containElement!: HTMLElement;

  books = [
    {
      name: 'LA SOCIEDAD SECRETA DE BRUJAS REBELDES',
      price: 20,
      image: 'https://m.media-amazon.com/images/I/81nK4VEFOHL._SL1500_.jpg',
      pages: 350,
      year: 2021,
      publisher: 'Editorial Brujas',
      translation: true,
      description: 'Una emocionante historia de brujas en un mundo lleno de magia.',
      review: 'Una novela fascinante que te transportará a un mundo mágico lleno de misterio y aventura.',
      suggestions: ['El libro de las sombras', 'La bruja de los sueños'],
      perfectFor: ['Una tarde de otoño', 'Desconectar en vacaciones']
    },
    {
      name: 'UN CUENTO PERFECTO',
      price: 18,
      image: 'https://m.media-amazon.com/images/I/71xbaSasq7L._SL1500_.jpg',
      pages: 336,
      year: 2023,
      publisher: 'Ediciones B',
      translation: 'Noemi Risco',
      description: 'Lorem ipsum dolor sit amet consectetur...',
      review: 'Una historia mágica que te hará soñar y creer en el amor.',
      suggestions: ['La casa en el mar más azul, de T.J. Klune'],
      perfectFor: ['Desconectar en vacaciones', 'Terminar la historia con una sonrisa', 'Evadirte de la realidad con un toque fantástico']
    },
    {
      name: 'LA GRIETA DEL SILENCIO',
      price: 17,
      image: 'https://m.media-amazon.com/images/I/716dJ3POQ1L._SL1500_.jpg',
      pages: 324,
      year: 2024,
      publisher: 'SUMA',
      translation: false,
      description: 'Un thriller psicológico que explora los oscuros secretos de una familia atrapada en una red de mentiras y silencios.',
      review: 'La grieta del silencio es el nuevo thriller de Javier Castillo que te atrapará de principio a fin. Una historia en la que Miren se verá envuelta en la investigación de la desaparición del pequeño Daniel Miller hace treinta años y el hallazgo actual de un cadáver con los labios sellados.',
      suggestions: ['La chica del tren', 'La mujer en la ventana'],
      perfectFor: ['Una noche de lectura', 'Resolver un misterio']
    },
    {
      name: 'EL VIAJE DE LAS ESTRELLAS',
      price: 22,
      image: 'https://m.media-amazon.com/images/I/71czYVpcOhL._SL1500_.jpg',
      pages: 400,
      year: 2022,
      publisher: 'Ediciones Espaciales',
      translation: 'Juan Pérez',
      description: 'Una odisea intergaláctica llena de aventuras y descubrimientos.',
      review: 'Una narrativa envolvente que te llevará a los confines del universo. Ideal para los amantes de la ciencia ficción.',
      suggestions: ['Dune', 'El juego de Ender'],
      perfectFor: ['Una noche estrellada', 'Explorar el cosmos en tu imaginación']
    },
    {
      name: 'LA ISLA DE LOS SUICIDAS',
      price: 19,
      image: 'https://m.media-amazon.com/images/I/71-4fVadJLL._SL1500_.jpg',
      pages: 320,
      year: 2023,
      publisher: 'Editorial Mar de Nubes',
      translation: true,
      description: 'Un thriller psicológico que aborda la vida y los secretos de una isla donde los suicidios son un misterio.',
      review: 'Un libro inquietante que mantiene a los lectores en vilo hasta la última página. Un must-read para los amantes del suspenso.',
      suggestions: ['El silencio de los corderos', 'El hombre en el castillo'],
      perfectFor: ['Un fin de semana de suspense', 'Reflexionar sobre la vida y la muerte']
    },
    {
      name: 'LA BIBLIOTECA DE LA MEDIA NOCHE',
      price: 21,
      image: 'https://m.media-amazon.com/images/I/71xbFWmIOSL._SL1495_.jpg',
      pages: 336,
      year: 2021,
      publisher: 'Alianza',
      translation: false,
      description: 'Entre la vida y la muerte hay una biblioteca. Y los estantes de esa biblioteca son infinitos. Cada libro da la oportunidad de probar otra vida que podrías haber vivido y de comprobar cómo habrían cambiado las cosas si hubieras tomado otras decisiones... ¿Habrías hecho algo de manera diferente si hubieras tenido la oportunidad?',
      review: 'Una historia fascinante que explora las decisiones de la vida y sus repercusiones. La narrativa es profunda y conmovedora, invitando al lector a reflexionar sobre sus propias elecciones.',
      suggestions: ['El infinito en un junco', 'La sombra del viento'],
      perfectFor: ['Una noche introspectiva', 'Reflexionar sobre decisiones personales']
    }

  ];


  constructor(private cartService: CartService) {}

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

  // Método para agregar un libro al carrito
  addToCart(book: { name: string; price: number; image: string }) {
    this.cartService.addToCart(book);
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
