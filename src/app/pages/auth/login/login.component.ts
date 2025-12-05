import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    DividerModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
    rememberMe: false
  };

  // Usuarios válidos hardcodeados
  private validUsers = [
    { email: 'admin@mail.com', password: 'admin123' },
    { email: 'user@mail.com', password: 'user123' }
  ];

  constructor(private router: Router) {}

  // Validar credenciales y navegar al dashboard
  onLogin() {
    const user = this.validUsers.find(
      u => u.email === this.credentials.email && u.password === this.credentials.password
    );

    if (user) {
      // Credenciales válidas, navegar al dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // Credenciales inválidas, mostrar alerta
      alert('Credenciales incorrectas. Por favor, intente nuevamente.');
    }
  }

  onRegister() {
    this.router.navigate(['/auth/register']);
  }
}
