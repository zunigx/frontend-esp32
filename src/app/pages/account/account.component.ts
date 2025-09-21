import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'; // Para los inputs del formulario
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, RouterLink, CardModule, ButtonModule, FormsModule, FooterComponent],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  user = {
    email: 'juan.perez@example.com',
    password: '******',
    cellphone: '+1 234 567 890',
    birthdate: '1990-01-01'
  };
}
