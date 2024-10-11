import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'restaurant-details',
    loadComponent: () =>
      import(
        './pages/components/restaurant-details/restaurant-details.component'
      ).then((c) => c.RestaurantDetailsComponent),
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        loadComponent: () =>
          import('./pages/components/overview/overview.component').then(
            (c) => c.OverviewComponent
          ),
      },
      {
        path: 'experiences',
        loadComponent: () =>
          import('./pages/components/experiences/experiences.component').then(
            (c) => c.ExperiencesComponent
          ),
      },
      {
        path: 'menu',
        loadComponent: () =>
          import('./pages/components/menu/menu.component').then(
            (c) => c.MenuComponent
          ),
      },
      {
        path: 'photos',
        loadComponent: () =>
          import('./pages/components/photos/photos.component').then(
            (c) => c.PhotosComponent
          ),
      },
      {
        path: 'reviews',
        loadComponent: () =>
          import('./pages/components/reviews/reviews.component').then(
            (c) => c.ReviewsComponent
          ),
      },
    ],
  },
];
