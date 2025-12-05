import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  { path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.DASH_ROUTES)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  { path: '**', redirectTo: 'auth/login' }
];
