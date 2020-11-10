
import { Component, OnInit, ViewChild,AfterViewInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { Registro } from 'src/app/Models/Registro';
import { Servicio } from 'src/app/servicios/servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit  {
  public registros;
  constructor(private servicio:Servicio,private ruta:Router) { }
  usuarioRegistro={
    empresa:false,
    actividadFisica:false,
    evacuacion:false,
    padecimiento:false,
    medicamento:false
  }
  ngOnInit() {
    this.registros=new Registro('','','','','','','','','cliente','','','','');
  }
  sliderOptions = { pager: true, autoHeight: true }

  onSubmit(obj){
    console.log(this.registros.nombre);
    this.servicio.RegistoUsuario(this.registros).then(data=>{
      console.log(data);
      if(data.statusCode==201){
        this.ruta.navigateByUrl("/login");
      }else{

      }
    });

  }
}

