import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Correct the property name to `styleUrls`
})
export class AppComponent implements OnInit {
  title = 'BookMyTableApp';

  // Inject PLATFORM_ID to detect if the platform is browser
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    // Only initialize Flowbite when running in the browser
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then(({ initFlowbite }) => {
        initFlowbite();
        console.log('Flowbite initialized in browser');
      });
    }
  }
}
