import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalities',
  templateUrl: './personalities.page.html',
  styleUrls: ['./personalities.page.scss'],
})
export class PersonalitiesPage implements OnInit {
  public personalities: Personality[] = [
    {
      name: 'Quim Barreiros',
      profession: 'Cantor/Compositor',
      imageUrl: 'assets/images/persona-2.webp',
      description: 'Joaquim de Magalhães Fernandes Barreiros, mais conhecido por Quim Barreiros, é um cantor popular português que toca acordeão.',
    },
    {
      name: 'Melânia Gomes',
      profession: 'Atriz/Apresentadora',
      imageUrl: 'assets/images/persona-1.jpg',
      description: 'Melânia Gomes é uma atriz e apresentadora de televisão portuguesa.',
    },
    {
      name: 'Canário',
      profession: 'Cantor/Compositor',
      imageUrl: 'assets/images/persona-3.jpg',
      description: 'Natural de Viana do Castelo, desde muito cedo que Augusto Canário se afeiçoou à concertina, instrumento do qual tem sido um grande divulgador. Antes, porém, começou pela viola, seguiu-se o cavaquinho e o bandolim.',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Personality {
  name: string;
  profession: string;
  imageUrl: string;
  description: string;
}
