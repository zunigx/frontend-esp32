import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    DividerModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formData = {
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: ''
  };

  constructor(private router: Router) {}

  onRegister() {
    if (
      this.formData.email &&
      this.formData.password &&
      this.formData.confirmPassword &&
      this.formData.password === this.formData.confirmPassword
    ) {
      this.router.navigate(['/auth/login']);
    }
  }

  onBackToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
