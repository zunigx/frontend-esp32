import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, InputTextModule, CardModule, ButtonModule, FooterComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';
  products = [
    { id: 1, name: 'Playera Manga Larga', price: 299.99, image: 'assets/images/playeras/playera-1.jpg' },
    { id: 2, name: 'Playera Manga Corta', price: 349.99, image: 'assets/images/playeras/playera-2.jpg' },
    { id: 3, name: 'Playera Manga Corta ', price: 279.99, image: 'assets/images/playeras/playera-3.jpg' }
  ];

  // Filtra productos según la búsqueda
  get filteredProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
