import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private http = inject(HttpClient);
  restaurantData = signal<any[]>([]);

  constructor() {
    this.getRestaurants();
  }
  getRestaurants() {
    return this.http.get<any>(environment.endpoints.getRestaurants);
  }
}
