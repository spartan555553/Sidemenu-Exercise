import { Component } from '@angular/core';

@Component({
  selector: 'app-gastronomy',
  templateUrl: 'gastronomy.page.html',
  styleUrls: ['gastronomy.page.scss']
})
export class GastronomyPage {

  foods: any[] = [
    {
      imageUrl: 'assets/images/bacalhau.jpg',
      title: 'Bacalhau á Gil Eanes',
      subtitle: 'Prato Principal',
      description: 'A receita é preparada no forno e inclui bacalhau desfiado, azeite, manteiga, creme de leite, cebola, maionese e queijo ralado.'
    },
    {
      imageUrl: 'assets/images/rojoes.jpg',
      title: 'Rojões á Minhota',
      subtitle: 'Prato Principal',
      description: 'São preparados com pedaços de carne de porco marinados de um dia para o outro em vinho verde, alho, sal, pimenta, louro e colorau.'
    },
    {
      imageUrl: 'assets/images/pescada.jpeg',
      title: 'Pescada á Vianense',
      subtitle: 'Prato Principal',
      description: 'Neste prato, são usados lombos inteiros de pescada, o prato é acompanhado por batatas com pele cortadas às rodelas, cebola e alho.'
    },
  ];

  constructor() {}

}
