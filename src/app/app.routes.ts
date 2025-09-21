import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { AccountComponent } from './pages/account/account.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'wish-list',
    loadChildren: () => import('./pages/wish-list/wish-list.routes').then(m => m.WISH_LIST_ROUTES)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.routes').then(m => m.NOT_FOUND_ROUTES)
  },
  { path: '**', redirectTo: 'not-found' }
];
