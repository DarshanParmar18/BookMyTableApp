import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { DateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchRestaurantComponent } from '../../../pages/components/search-restaurant/search-restaurant.component';
import { SearchRestaurantService } from '../../../pages/services/search-restaurant.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    SearchRestaurantComponent,
    FormsModule,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  private searchRestaurantService = inject(SearchRestaurantService);

  private readonly _currentTime = new Date().getTime();
  readonly minDate = new Date(this._currentTime);
  readonly maxDate = new Date(this._currentTime + 432000000); // 432000000 is 5 days

  date = signal<Date>(new Date(this._currentTime));

  constructor() {
    effect(
      () => {
        const dateChanged = this.date();
        this.searchRestaurantService.setSelectDate(dateChanged);
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {
    console.log(this.date());
  }

  onDateChange() {
    this.router.navigate(['searchRestaurant']);
    console.log(`onDateChanged: ${this.date()}`);
  }
}
