import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/servicios/servicio';
import { PopoverController } from '@ionic/angular';
import { MostrarDietaComponent } from 'src/app/components/mostrar-dieta/mostrar-dieta.component';

@Component({
  selector: 'app-dietadiaria',
  templateUrl: './dietadiaria.page.html',
  styleUrls: ['./dietadiaria.page.scss'],
})
export class DietadiariaPage implements OnInit {
  datos:any=[];
  constructor(private servicio:Servicio,public popoverController: PopoverController) { }

  ngOnInit() {
    this.servicio.ObtenerDietas().then(data=>{
      console.log(data.data.dietas);
      this.datos=data.data.dietas;
    });
  }
  

  async presentPopover(id) {
    const popover = await this.popoverController.create({
      component: MostrarDietaComponent,
      componentProps: {
        onClick: () => {
          popover.dismiss();
        },
        "id":id,
      },
    });
    return await popover.present();
  }

}
