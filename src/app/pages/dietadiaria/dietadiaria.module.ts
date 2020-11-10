import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DietadiariaPageRoutingModule } from './dietadiaria-routing.module';
import { DietadiariaPage } from './dietadiaria.page';
import { MostrarDietaComponent } from 'src/app/components/mostrar-dieta/mostrar-dieta.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  entryComponents:[
    MostrarDietaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietadiariaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DietadiariaPage]
})
export class DietadiariaPageModule {}
