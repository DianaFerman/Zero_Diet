import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Servicio} from '../../servicios/servicio';
import { Sesion } from 'src/app/Models/Sesion';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public sesion;
  constructor(private ruta:Router,private servicio:Servicio) { }

  ngOnInit() {
    this.sesion=new Sesion('','');
  }
  ingresar(){
    this.ruta.navigateByUrl("/tabs/perfil");
  }
  presentacion(){
    this.ruta.navigateByUrl("/presentacion");
  }

  onSubmit(obj){
      console.log(obj.value);
      this.servicio.iniciarSession(obj.value).then((data:any)=>{
        console.log(data.id_usuario);
        this.ruta.navigate(['tabs/perfil',data.id_usuario]);
      });
      
   
  }


}
