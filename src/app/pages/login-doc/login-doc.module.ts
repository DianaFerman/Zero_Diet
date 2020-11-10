import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginDocPageRoutingModule } from './login-doc-routing.module';

import { LoginDocPage } from './login-doc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginDocPageRoutingModule
  ],
  declarations: [LoginDocPage]
})
export class LoginDocPageModule {}
