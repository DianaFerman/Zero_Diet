import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionLoginPageRoutingModule } from './opcion-login-routing.module';

import { OpcionLoginPage } from './opcion-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionLoginPageRoutingModule
  ],
  declarations: [OpcionLoginPage]
})
export class OpcionLoginPageModule {}
