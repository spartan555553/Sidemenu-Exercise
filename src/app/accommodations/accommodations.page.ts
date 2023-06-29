import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.page.html',
  styleUrls: ['./accommodations.page.scss'],
})
export class AccommodationsPage implements OnInit {
  accommodations: Accommodation[] = [];

  constructor() { }

  ngOnInit() {
    // Initialize accommodations data
    this.accommodations = [
      {
        name: 'Hotel da Fábrica do Chocolate',
        rating: 9,
        price: '100€',
        imageUrl: 'assets/images/hotel-1.jpg'
      },
      {
        name: 'AXIS VIANA BUSINESS & SPA HOTEL',
        rating: 7,
        price: '80€',
        imageUrl: 'assets/images/hotel-2.jpg'
      },
      {
        name: 'Hotel Rali Viana',
        rating: 6,
        price: '50€',
        imageUrl: 'assets/images/hotel-3.jpg'
      },
      {
        name: 'FeelViana Sport Hotel',
        rating: 8,
        price: '90€',
        imageUrl: 'assets/images/hotel-4.jpg'
      },
    ];
  }
}

interface Accommodation {
  name: string;
  rating: number;
  price: string;
  imageUrl: string;
}
