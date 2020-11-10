import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Sesion } from 'src/app/Models/Sesion';
import { Servicio } from 'src/app/servicios/servicio';

@Component({
  selector: 'app-login-doc',
  templateUrl: './login-doc.page.html',
  styleUrls: ['./login-doc.page.scss'],
})
export class LoginDocPage implements OnInit {
  public sesion;
  constructor(private ruta:Router,private servicio:Servicio) { }

  ngOnInit() {
    this.sesion=new Sesion('','');
  }
  ingresar_doctor(){
    this.ruta.navigateByUrl("tabs2/lista-pacientes");
  }

  onSubmit(obj){
    console.log(obj.value);
    this.servicio.iniciarSession(obj.value).then(data=>{
      console.log(data);
      this.ruta.navigateByUrl("tabs2/lista-pacientes");
      
        
      
    });
  }

}
