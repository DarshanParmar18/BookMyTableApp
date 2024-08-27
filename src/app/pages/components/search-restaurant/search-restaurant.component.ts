import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { SearchRestaurantService } from '../../services/search-restaurant.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe, DatePipe } from '@angular/common';
@Component({
  selector: 'app-search-restaurant',
  standalone: true,
  providers: [DatePipe],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    DatePipe,
  ],
  templateUrl: './search-restaurant.component.html',
  styleUrl: './search-restaurant.component.scss',
})
export class SearchRestaurantComponent implements OnInit {
  private searchRestaurantService = inject(SearchRestaurantService);
  private datePipe = inject(DatePipe);
  searchRestaurant = signal('');
  searchBranch = signal('');
  restaurantsData = signal<any[]>([]);
  branchesData = signal<any[]>([]);
  dinningTables = signal<any[]>([]);

  filteredRestaurants = computed(() =>
    this.restaurantsData()
      .map((m) => m.name)
      .filter((res) => res.toLowerCase().includes(this.searchRestaurant()))
  );
  filteredBranches = computed(() =>
    this.branchesData()
      .map((m) => m.name)
      .filter((res) => res.toLowerCase().includes(this.searchBranch()))
  );
  selectedDate = signal<Date>(new Date(new Date().getTime()));

  constructor() {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  selectedDateEffect = effect(
    () => {
      const date = this.searchRestaurantService.getSelectedDate();
      this.selectedDate.set(date);
    },
    { allowSignalWrites: true }
  );

   formatedDate= computed(() => {
      return this.datePipe?.transform(this.selectedDate(), 'yyyy-MM-dd');
  });

  tables(branchID:number){
    console.log(this.formatedDate() !== null);
    if (this.formatedDate()) {
      this.getDinningTables(branchID, this.formatedDate() as string);
      console.log(this.dinningTables());
    }
  }

  onSearchRestaurant(event: Event) {
    // get the search value
    this.searchRestaurant.set((event.target as HTMLInputElement).value);

    //check if searchRestaurant value is valid
    if (this.searchRestaurant()) {
      const findRestaurantsByname = this.restaurantsData().find(
        (item) => item.name === this.searchRestaurant()
      );
      //check if findRestaurantsByname is valid
      if (findRestaurantsByname) {
        console.log(`findRestaurantsByname: ${findRestaurantsByname}`);
        this.findBranches(findRestaurantsByname.id);
      } else {
        console.log(
          `invalid value of findRestaurantsByname -_-  ${findRestaurantsByname}`
        );
      }
    }
  }

  // Find branch by restaurant id
  findBranches(restaurantID: number) {
    this.getBranches(restaurantID);
  }
  onSearchBranches(event: Event) {
    // get the search value
    this.searchBranch.set((event.target as HTMLInputElement).value);
  }

  getRestaurants() {
    this.searchRestaurantService.getRestaurants().subscribe((res) => {
      this.restaurantsData.set(res);
    });
  }

  getBranches(restaurantID: number) {
    this.searchRestaurantService
      .getBranches(restaurantID)
      .subscribe((branches) => {
        this.branchesData.set(branches);
      });
  }
  getDinningTables(restaurantID: number, reservationDate: string) {
    this.searchRestaurantService
      .getDinningTablesByDate(restaurantID, reservationDate)
      .subscribe(
        (res) => this.dinningTables.set(res),
        (error) => {
          console.warn(error);
        }
      );
  }
}
