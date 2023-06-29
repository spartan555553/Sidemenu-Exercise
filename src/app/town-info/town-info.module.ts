import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TownInfoPageRoutingModule } from './town-info-routing.module';

import { TownInfoPage } from './town-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TownInfoPageRoutingModule
  ],
  declarations: [TownInfoPage]
})
export class TownInfoPageModule {}
