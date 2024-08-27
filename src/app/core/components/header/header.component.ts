import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor() {}
  toggle() {
    var nav = document.querySelector('.nav');
    nav?.classList.toggle('active');
    console.log('clicked');
  }
}
