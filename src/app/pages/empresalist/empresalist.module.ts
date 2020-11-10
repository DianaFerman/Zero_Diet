import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresalistPageRoutingModule } from './empresalist-routing.module';

import { EmpresalistPage } from './empresalist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresalistPageRoutingModule
  ],
  declarations: [EmpresalistPage]
})
export class EmpresalistPageModule {}
