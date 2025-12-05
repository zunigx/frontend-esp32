import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  device = {
    temperature: '-- °C',
    humidity: '-- %',
    inputVoltage: '-- V',
    uptime: '--',
    online: false,
    batteryVoltage: '-- V'
  };

  private apiUrl = 'https://server-kappa-smoky-91.vercel.app/api/telemetry';
  private refreshInterval: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Cargar datos inmediatamente
    this.loadTelemetryData();

    // Actualizar cada 5 segundos
    this.refreshInterval = setInterval(() => {
      this.loadTelemetryData();
    }, 5000);
  }

  ngOnDestroy(): void {
    // Limpiar intervalo al destruir componente
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  loadTelemetryData(): void {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (data) => {
        // Actualizar datos del dispositivo
        this.device = {
          temperature: data.temperature ? `${data.temperature} °C` : '-- °C',
          humidity: data.humidity ? `${data.humidity} %` : '-- %',
          inputVoltage: data.inputVoltage ? `${data.inputVoltage} V` : '-- V',
          uptime: data.uptime || '--',
          online: data.online ?? false,
          batteryVoltage: data.batteryVoltage ? `${data.batteryVoltage} V` : '-- V'
        };
      },
      error: (error) => {
        console.error('Error al cargar datos de telemetría:', error);
        this.device.online = false;
      }
    });
  }
}
