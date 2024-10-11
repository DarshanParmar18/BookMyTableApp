/// <reference types="google.maps" />

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GooglePlacesService {
  constructor() {}
  // Initialize Google Autocomplete
  initializeAutocomplete(
    inputElement: HTMLInputElement,
    options?: google.maps.places.AutocompleteOptions
  ): google.maps.places.Autocomplete {
    return new google.maps.places.Autocomplete(inputElement, options);
  }

  // Restrict to a specific country (e.g., 'US')
  restrictAutocompleteToCountry(
    autocomplete: google.maps.places.Autocomplete,
    countryCode: string
  ) {
    autocomplete.setComponentRestrictions({
      country: [countryCode],
    });
  }
}
