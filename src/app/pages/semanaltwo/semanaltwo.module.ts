import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemanaltwoPageRoutingModule } from './semanaltwo-routing.module';

import { SemanaltwoPage } from './semanaltwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemanaltwoPageRoutingModule
  ],
  declarations: [SemanaltwoPage]
})
export class SemanaltwoPageModule {}
