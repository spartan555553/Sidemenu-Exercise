import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Gastronomy', url: '/gastronomy', icon: 'restaurant' },
    { title: 'Personalities', url: '/personalities', icon: 'person' },
    { title: 'Town Info', url: '/town-info', icon: 'map' },
    { title: 'Accommodations', url: '/accommodations', icon: 'bed' },
    { title: 'Sports clubs', url: '/sports-clubs', icon: 'fitness' },
    { title: 'About Me', url: '/about-me', icon: 'person-circle' },
  ];

  constructor() {}
}
