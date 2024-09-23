import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-club-de-lectura',
  templateUrl: './club-de-lectura.component.html',
  styleUrls: ['./club-de-lectura.component.css']
})
export class ClubDeLecturaComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const cards = Array.from(document.querySelectorAll('.cards li')) as HTMLElement[];
    const container = document.querySelector('.seccion-club') as HTMLElement;

    container.addEventListener('scroll', () => {
      const scrollPosition = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const cardWidth = cards[0].offsetWidth;
      const maxDistance = containerWidth / 2;

      cards.forEach((card, index) => {
        const cardCenter = (index * cardWidth) + (cardWidth / 2);
        const scrollCenter = scrollPosition + (containerWidth / 2);
        const distance = Math.abs(cardCenter - scrollCenter);
        const rotation = (distance / maxDistance) * 30 - 30; // Ajusta el valor para la rotación
        const scale = Math.max(1 - distance / maxDistance, 0.8);

        card.style.transform = `rotateY(${rotation}deg) scale(${scale})`;
      });
    });
  }
}
