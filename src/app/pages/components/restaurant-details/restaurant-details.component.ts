import { Component } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [BookingComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './restaurant-details.component.html',
  styleUrl: './restaurant-details.component.scss',
})
export class RestaurantDetailsComponent {}
