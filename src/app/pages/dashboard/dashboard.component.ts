import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  device = {
    temperature: '-- °C',
    humidity: '-- %',
    inputVoltage: '-- V',
    uptime: '--',
    online: false,
    batteryVoltage: '-- V'
  };
}
