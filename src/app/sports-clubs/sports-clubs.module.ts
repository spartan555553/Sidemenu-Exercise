import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportsClubsPageRoutingModule } from './sports-clubs-routing.module';

import { SportsClubsPage } from './sports-clubs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportsClubsPageRoutingModule
  ],
  declarations: [SportsClubsPage]
})
export class SportsClubsPageModule {}
