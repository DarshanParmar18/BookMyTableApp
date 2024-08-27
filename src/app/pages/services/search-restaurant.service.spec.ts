import { TestBed } from '@angular/core/testing';

import { SearchRestaurantService } from './search-restaurant.service';

describe('SearchRestaurantService', () => {
  let service: SearchRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
