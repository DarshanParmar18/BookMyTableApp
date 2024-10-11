import {
  Component,
  computed,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AsyncPipe, DatePipe, NgClass } from '@angular/common';

import { GooglePlacesService } from '../../../pages/services/google-places.service';
import { BookingComponent } from '../../../pages/components/booking/booking.component';
import { RestaurantsComponent } from '../../../pages/components/search-restaurant/restaurants.component';
import { RestaurantService } from '../../../pages/services/restaurant.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    DatePipe,
    BookingComponent,
    NgClass,
    RestaurantsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  @ViewChild('locationInput', { static: true }) locationInput!: ElementRef;
  private googlePlacesService = inject(GooglePlacesService);
  private restaurantService = inject(RestaurantService);

  searchLocations = signal('Pune, Maharashtra, India');
  searchRestaurant = signal('');
  searchBranch = signal('');
  selectedCuisine = signal('');
  selectedRestaurantType = signal<string>('');
  restaurantData = signal<any[]>([]);
  branchesData = signal<any[]>([]);
  dinningTablesData = signal<any[]>([]);

  isloading = signal(false);

  activeDropdown: string | null = null;

  Cuisines = ['Indian', 'Italian', 'French', 'Chineese'];
  RestaurantTypes = ['Veg', 'Non-Veg', 'Vegan'];

  toggleDropdown(dropdown: string) {
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
    console.log(dropdown);
  }
  onClear(dropdown: string) {
    if (dropdown === 'cuisine') {
      // this.selectedCuisine.set('');
      this.onSelectCuisine('');
    } else if (dropdown === 'restaurantType') {
      // this.selectedRestaurantType.set('');
      this.onSelectRestaurantType('');
    }
    this.activeDropdown = null;
  }

  onSelectCuisine(cuisine: string) {
    this.selectedCuisine.set(cuisine);
    this.activeDropdown = null;
  }

  onSelectRestaurantType(type: string) {
    this.selectedRestaurantType.set(type);
    this.activeDropdown = null;
  }

  constructor() {}

  ngOnInit(): void {
    const inputElement = this.locationInput.nativeElement;

    this.getRestaurant();

    const autocomplete = this.googlePlacesService.initializeAutocomplete(
      inputElement,
      {
        types: ['(cities)'], // Limit suggestions to cities
      }
    );

    // restrict to a specific country (e.g., 'IN')
    this.googlePlacesService.restrictAutocompleteToCountry(autocomplete, 'IN');

    // Add listener for place selection
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place) {
        console.log('Selected Place:', place);
        this.handlePlaceSelection(place);
        // You can handle the place object and display suggestions below
      }
    });
    // // update restaurant by location
  }

  handlePlaceSelection(place: google.maps.places.PlaceResult) {
    this.searchLocations.set(place.formatted_address || '');
  }

  filteredRestaurantsByLocation = computed(() => {
    const locationParts = this.searchLocations()
      .split(',')
      .map((part) => part.trim().toLowerCase());
    console.log(this.restaurantData);
    let filter = this.restaurantData().filter((restaurant) => {
      const cityMatch = locationParts.includes(restaurant.City.toLowerCase());
      return cityMatch;
    });
    console.log(filter);
    console.log(this.searchLocations());
    return filter;
  });

  filteredRestaurants = computed(() => {
    // let data = this.restaurantData();

    if (this.filteredRestaurantsByLocation().length <= 0) {
      console.log('empty');
      return [];
    }

    let filterRestaurants = this.filteredRestaurantsByLocation();
    if (this.selectedCuisine()) {
      filterRestaurants = filterRestaurants.filter((f: any) =>
        f.Cuisines.includes(this.selectedCuisine())
      );
    }
    if (this.selectedRestaurantType()) {
      filterRestaurants = filterRestaurants.filter((f) =>
        f.Types.includes(this.selectedRestaurantType())
      );
    }
    console.log(filterRestaurants);
    return filterRestaurants;
    // return data;
  });

  getRestaurant() {
    this.isloading.set(true);
    this.restaurantService
      .getRestaurants()
      .pipe(delay(2000))
      .subscribe((res) => {
        this.restaurantData.set(res);
        this.isloading.set(false);
        console.log(this.restaurantData());
      });
  }
}
