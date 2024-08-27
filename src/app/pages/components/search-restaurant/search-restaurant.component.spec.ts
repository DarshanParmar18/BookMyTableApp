import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRestaurantComponent } from './search-restaurant.component';

describe('SearchRestaurantComponent', () => {
  let component: SearchRestaurantComponent;
  let fixture: ComponentFixture<SearchRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchRestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
