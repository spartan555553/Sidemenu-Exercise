import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportsClubsPage } from './sports-clubs.page';

const routes: Routes = [
  {
    path: '',
    component: SportsClubsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsClubsPageRoutingModule {}
