import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculaPesoPageRoutingModule } from './calcula-peso-routing.module';

import { CalculaPesoPage } from './calcula-peso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculaPesoPageRoutingModule
  ],
  declarations: [CalculaPesoPage]
})
export class CalculaPesoPageModule {}
