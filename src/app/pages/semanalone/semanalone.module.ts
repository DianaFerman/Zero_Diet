import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemanalonePageRoutingModule } from './semanalone-routing.module';

import { SemanalonePage } from './semanalone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemanalonePageRoutingModule
  ],
  declarations: [SemanalonePage]
})
export class SemanalonePageModule {}
