import { Component, effect, inject, Input, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  providers: [],
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss',
})
export class RestaurantsComponent implements OnInit {
  private restaurantService = inject(RestaurantService);

  // restaurantData = signal<any[]>([]);
  @Input() restaurantData: any;
  @Input() isloading: any;

  constructor() {
    // this.getRestaurant();
    effect(() => {
      console.log(this.isloading());
    });
  }

  ngOnInit(): void {
    console.log(this.restaurantData());
  }
}
