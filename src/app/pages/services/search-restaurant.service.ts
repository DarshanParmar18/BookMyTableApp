import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchRestaurantService {
  private http = inject(HttpClient);
  private readonly baseURL =
    'https://book-my-table-app-api-d7gwc8hzasbqggfm.eastus-01.azurewebsites.net';
  private selectedDate = signal<Date>(new Date(new Date().getTime()));

  constructor() {}

  setSelectDate(date: Date) {
    this.selectedDate.set(date);
    console.log(this.selectedDate());
  }

  getSelectedDate(): Date {
    return this.selectedDate();
  }

  getRestaurants() {
    return this.http.get<any>(`${this.baseURL}/api/Restaurant/restaurants`);
  }

  getBranches(restaurantId: number) {
    return this.http.get<any>(
      `${this.baseURL}/api/Restaurant/branches/${restaurantId}`
    );
  }

  getDinningTables(branchId: number) {
    this.http.get<any>(
      `${this.baseURL}/api/Restaurant/dinningTables/${branchId}`
    );
  }

  getDinningTablesByDate(branchId: number, date: string) {
    return this.http.get<any>(
      `${this.baseURL}/api/Restaurant/dinningTables/${branchId}/${date}`
    );
  }
}
