import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarDietaComponent } from './mostrar-dieta/mostrar-dieta.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    MostrarDietaComponent
  ],
  exports:[
    MostrarDietaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
