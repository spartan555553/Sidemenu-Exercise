import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports-clubs',
  templateUrl: './sports-clubs.page.html',
  styleUrls: ['./sports-clubs.page.scss'],
})
export class SportsClubsPage implements OnInit {
  clubs: { name: string; rating: number; imageUrl: string }[];

  constructor() {
    this.clubs = [
      { name: 'Sport Club Vianense', rating: 4.5, imageUrl: 'assets/images/club-1.jpg' },
      { name: 'Club de Surf', rating: 3.8, imageUrl: 'assets/images/club-2.jpg' },
      { name: 'Club de Remo', rating: 4.2, imageUrl: 'assets/images/club-3.jpg' },
      { name: 'Escola de Vela', rating: 4.0, imageUrl: 'assets/images/club-4.jpg' },
    ];
  }

  ngOnInit() {}
}
