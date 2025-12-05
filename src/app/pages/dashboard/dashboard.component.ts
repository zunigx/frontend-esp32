import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Solo ejecutar en el navegador, no en el servidor
    if (isPlatformBrowser(this.platformId)) {
      // Cargar datos inmediatamente
      this.loadTelemetryData();

      // Actualizar cada 5 segundos
      this.refreshInterval = setInterval(() => {
        this.loadTelemetryData();
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    // Limpiar intervalo al destruir componente
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  loadTelemetryData(): void {
    console.log('Loading telemetry data from:', this.apiUrl);
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        console.log('Telemetry data received:', data);

        // Tomar el primer elemento del array (el más reciente)
        if (data && data.length > 0) {
          const latestData = data[0];

          // Mapear las propiedades del API a las del componente
          this.device = {
            temperature: latestData.temp ? `${latestData.temp} °C` : '-- °C',
            humidity: latestData.hum ? `${latestData.hum} %` : '-- %',
            inputVoltage: latestData.inputVoltage ? `${latestData.inputVoltage} V` : '-- V',
            uptime: latestData.uptime || '--',
            online: latestData.temp != null && latestData.hum != null, // Considerar online si hay datos
            batteryVoltage: latestData.batteryVoltage ? `${latestData.batteryVoltage} V` : '-- V'
          };
        } else {
          // Sin datos disponibles
          this.device = {
            temperature: '-- °C',
            humidity: '-- %',
            inputVoltage: '-- V',
            uptime: '--',
            online: false,
            batteryVoltage: '-- V'
          };
        }

        console.log('Device updated:', this.device);
      },
      error: (error) => {
        console.error('Error al cargar datos de telemetría:', error);
        this.device.online = false;
      }
    });
  }
}
