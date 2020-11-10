import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/servicios/servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerrarsesion',
  templateUrl: './cerrarsesion.page.html',
  styleUrls: ['./cerrarsesion.page.scss'],
})
export class CerrarsesionPage implements OnInit {

  constructor(private servicio:Servicio,private ruta:Router) {
    
   }

  ngOnInit() {
  }
  cerrarSesion(){
    this.servicio.cerrarSesion().then(data=>{
      if(data){
        this.ruta.navigateByUrl("/start");
      }else{

      }
    });
  }
}
