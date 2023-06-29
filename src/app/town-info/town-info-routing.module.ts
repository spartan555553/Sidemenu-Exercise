import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TownInfoPage } from './town-info.page';

const routes: Routes = [
  {
    path: '',
    component: TownInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TownInfoPageRoutingModule {}
