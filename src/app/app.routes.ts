import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'searchRestaurant',
    loadComponent: () =>
      import(
        './pages/components/search-restaurant/search-restaurant.component'
      ).then((c) => c.SearchRestaurantComponent),
  },
];
