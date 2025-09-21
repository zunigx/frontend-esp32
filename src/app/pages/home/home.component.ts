import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel'; // Importa el módulo del carrusel
import { CommonModule } from '@angular/common'; // Para ngFor u otras directivas
import { RouterLink } from '@angular/router'; // Para [routerLink]
import { FooterComponent } from '../../shared/components/footer/footer.component'; // Importa el componente Footer


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, CommonModule, RouterLink, FooterComponent], // Importa los módulos necesarios
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  carruselImages = [
    { src: 'assets/images/carrusel/carrusel-1.jpg', alt: 'Carrusel 1' },
    { src: 'assets/images/carrusel/carrusel-2.jpg', alt: 'Carrusel 2' },
    { src: 'assets/images/carrusel/carrusel-3.jpg', alt: 'Carrusel 3' },
    { src: 'assets/images/carrusel/carrusel-4.jpg', alt: 'Carrusel 4' }
  ];
}
