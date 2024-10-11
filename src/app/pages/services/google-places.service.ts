/// <reference types="google.maps" />

import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GooglePlacesService {
  private googleLoaded = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  loadGoogleMaps(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (this.googleLoaded) {
        resolve();
        return;
      }

      if (isPlatformBrowser(this.platformId)) {
        // Check for existing script
        if (
          document.querySelector(
            `script[src^="https://maps.googleapis.com/maps/api/js"]`
          )
        ) {
          this.googleLoaded = true;
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.MAPS_API_KEY}&libraries=places&callback=initMap`;
        script.async = true;
        script.defer = true;

        // Define initMap on the window object before appending the script
        (window as any).initMap = () => {
          this.googleLoaded = true;
          console.log('Google Maps has been loaded.');
          resolve();
        };

        document.body.appendChild(script);
      } else {
        resolve(); // If on the server
      }
    });
  }

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
