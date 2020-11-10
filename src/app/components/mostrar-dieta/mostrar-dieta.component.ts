import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Servicio } from 'src/app/servicios/servicio';

@Component({
  selector: 'app-mostrar-dieta',
  templateUrl: './mostrar-dieta.component.html',
  styleUrls: ['./mostrar-dieta.component.scss'],
})
export class MostrarDietaComponent implements OnInit {
  @Input() public onClick = () => {}
  dia:any;
  nada="";
  constructor(public navParams:NavParams,private servicio:Servicio) { }

  ngOnInit() {
    this.servicio.ObtenerDieta(this.navParams.get('id')).then(data=>{
      console.log(data.data);
      this.dia=data.data;
    });
    
  }

  

afterClick() {
  this.onClick();
}

}
