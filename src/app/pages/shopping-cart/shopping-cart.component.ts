import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-shoping-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, CardModule, ButtonModule, FooterComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems = [
    { id: 1, name: 'Playera Roja', size: 'M', quantity: 1, price: 299.99, image: 'assets/images/playeras/playera-1.jpg' },
    { id: 2, name: 'Playera Azul', size: 'L', quantity: 2, price: 349.99, image: 'assets/images/playeras/playera-2.jpg' }
  ];

  subtotal = 999.97; // 299.99 + 2 * 349.99
  shipping = 50.00; // Costo de envío estático
  total = this.subtotal + this.shipping;
}
