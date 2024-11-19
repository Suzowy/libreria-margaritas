import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ScrollService } from '../../services/scroll.service';
@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
})
export class LibreriaComponent implements AfterViewInit {
  tooltipActive: boolean = false;

  books = [
    {
      name: 'LA SOCIEDAD SECRETA DE BRUJAS REBELDES',
      price: 20,
      image: 'https://m.media-amazon.com/images/I/81nK4VEFOHL._SL1500_.jpg',
      pages: 350,
      year: 2021,
      publisher: 'Editorial Brujas',
      translation: true,
      description: 'Las brujas se rigen por tres normas irrompibles: esconde tu magia, mantén la cabeza gacha y aléjate del resto de brujas. Por eso, Mika Moon está acostumbrada a estar sola, pero todo cambia cuando le llega un mensaje inesperado rogándole que viaje a Nowhere House, una mansión misteriosa, para enseñar a tres niñas a controlar sus poderes.<br>  Al romper todas las reglas y aceptar el desafío, Mika descubrirá en los confines de Nowhere House secretos enterrados, nuevos amigos y un malhumorado bibliotecario irlandés que piensa vigilarla de cerca.Sin embargo, justo cuando Mika comienza a sentir que por fin ha encontrado un hogar, tendrá que decidir si la familia que acaba de encontrar merece que lo arriesgue todo.',
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
      description: 'Elísabet Benavent, @BetaCoqueta, vuelve al panorama de la literatura con una novela que explora el significado del éxito en la vida y reflexiona con ironía y humor acerca de las imposiciones sociales, la presión del grupo y la autoexigencia que, aunque cueste creerlo, no es sinónimo de felicidad.',
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
      description: 'Staten Island, 1981. La bicicleta de Daniel Miller aparece abandonada en las inmediaciones de su casa. No hay rastro del pequeño. Treinta años después, en 2011, la periodista de investigación del Manhattan Press Miren Triggs sigue una pista que la conduce hasta el terrible hallazgo de un cadáver con los labios sellados. <br> Miren Triggs y Jim Schmoer, su antiguo profesor de periodismo, tratarán de descubrir qué vincula ambos casos mientras ayudan a Ben Miller, padre de Daniel y ex inspector del FBI, a reconstruir por última vez la desaparición de su hijo. <br> Se adentrarán así en las profundidades de un enigma lleno de recovecos en los que resuenan las voces del pasado. ¿Qué le sucedió a Daniel? ¿Quién se esconde tras el horrible asesinato? ¿Puede el silencio ser el refugio de la verdad? <br> Tras vender más de 2.500.000 ejemplares de sus anteriores novelas, Javier Castillo recupera a Miren, su personaje más icónico, y regresa al universo de La chica de nieve y El juego del alma. La grieta del silencio es un ejercicio de alta narrativa de impacto en el que Castillo despliega su maestría para ofrecer a los lectores una novela laberinto, una sinfonía que retumba en las entrañas, efervescente y enigmática, en la que el dolor y las viejas heridas regresan como el eco de los secretos que en realidad callamos.',
      review: 'La grieta del silencio es el nuevo thriller de Javier Castillo que te atrapará de principio a fin. Una historia en la que Miren se verá envuelta en la investigación de la desaparición del pequeño Daniel Miller hace treinta años y el hallazgo actual de un cadáver con los labios sellados.',
      suggestions: ['La chica del tren', 'La mujer en la ventana'],
      perfectFor: ['Una noche de lectura', 'Resolver un misterio']
    },
    {
      name: 'EL VIAJE DE LAS ESTRELLAS',
      price: 22,
      image: 'https://m.media-amazon.com/images/I/915BfaT3KPL._SY466_.jpg',
      pages: 400,
      year: 2022,
      publisher: 'Ediciones Espaciales',
      translation: 'Juan Pérez',
      description: 'En "El Viaje de las Estrellas", seguimos la odisea de la nave espacial "Estelar" y su valiente tripulación desde la tranquila ciudad de Aurora hasta los confines del cosmos. <br> A lo largo de su exploración, se encuentran con civilizaciones alienígenas, nebulosas resplandecientes y agujeros de gusano que desafían la comprensión humana. <br> El libro narra las lecciones aprendidas, los descubrimientos sorprendentes y los desafíos inesperados que la tripulación enfrenta en su viaje de regreso a casa. <br> El legado perdurable del viaje se convierte en una inspiración para futuras generaciones, recordándonos que, en la vastedad del universo, siempre habrá nuevos horizontes por descubrir.',
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
      description: 'Cuando descubre la infidelidad de su mujer, el detective mallorquín Diego Luján acepta investigar la desaparición de Rosa, esposa mulata de un miembro de la nobleza local, y averigua que ambas utilizan la misma red de contactos extramatrimoniales. <br> Los reveladores chats de Rosa en esa red le conducirán, a través de habitaciones de citas y persecuciones a asesinos a sueldo, a los sobrecogedores acantilados de Cabo Blanco, lugar predilecto para los suicidas en la isla. <br> En la búsqueda sobrevendrán nuevos “suicidios”, aparentemente orquestados por Toni Grimalt, hotelero, dueño de locales de ocio de la costa y jefe de un clan mafioso que corrompe a policías y políticos al que Luján es obligado a unirse… hasta que la situación explota.',
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
      description: 'Entre la vida y la muerte hay una biblioteca. Y los estantes de esa biblioteca son infinitos. Cada libro da la oportunidad de probar otra vida que podrías haber vivido y de comprobar cómo habrían cambiado las cosas si hubieras tomado otras decisiones...  ¿Habrías hecho algo de manera diferente si hubieras tenido la oportunidad? <br> Nora Seed aparece, sin saber cómo, en la Biblioteca de la Medianoche, donde se le ofrece una nueva oportunidad para hacer las cosas bien. Hasta ese momento, su vida ha estado marcada por la infelicidad y el arrepentimiento. <br> Nora siente que ha defraudado a todos, y también a ella misma. Pero esto está a punto de cambiar. <br> Los libros de la Biblioteca de la Medianoche permitirán a Nora vivir como si hubiera hecho las cosas de otra manera. Con la ayuda de una vieja amiga, tendrá la opción de esquivar todo aquello que se arrepiente de haber hecho (o no haber hecho), en pos de la vida perfecta. Pero las cosas no siempre serán como imaginó que serían, y pronto sus decisiones enfrentarán a la Biblioteca y a ella misma en un peligro extremo. Nora deberá responder una última pregunta antes de que el tiempo se agote: ¿cuál es la mejor manera de vivir?',
      review: 'Una historia fascinante que explora las decisiones de la vida y sus repercusiones. La narrativa es profunda y conmovedora, invitando al lector a reflexionar sobre sus propias elecciones.',
      suggestions: ['El infinito en un junco', 'La sombra del viento'],
      perfectFor: ['Una noche introspectiva', 'Reflexionar sobre decisiones personales']
    }

  ];

  expandedDescription: boolean[] = [];

  constructor(
    private cartService: CartService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.expandedDescription = Array(this.books.length).fill(false);
  }

  ngAfterViewInit(): void {
    this.scrollService.initializeScrollEffect();
  }

  addToCart(book: { name: string; price: number; image: string }) {
    this.cartService.addToCart(book);
  }

  toggleDescription(index: number) {
    this.expandedDescription[index] = !this.expandedDescription[index];
  }

  showTooltip(event: Event): void {
    this.tooltipActive = true;
    setTimeout(() => {
      this.tooltipActive = false;
    }, 1000);
  }
}
