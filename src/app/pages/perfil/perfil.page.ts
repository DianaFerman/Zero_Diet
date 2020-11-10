import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/servicios/servicio';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  datosUsuario:any={};
  datosTest:any={};
  IMC:any;
  pesoIdeal:any;
  constructor(private rutas:ActivatedRoute,private servicio:Servicio) { }

  ngOnInit() {
    this.rutas.params.subscribe(data=>{
      console.log(data.id);
      this.servicio.ObtenerUsuario(data.id).then(data=>{
        console.log(data);
        this.datosUsuario=data.data;
        const cuadrado=this.datosUsuario.estatura*this.datosUsuario.estatura;
        const IMC2=this.datosUsuario.peso/cuadrado;
        this.IMC=IMC2.toFixed(2);
        const peso=((this.datosUsuario.estatura*100)-100)*0.90;
        this.pesoIdeal=peso;
        
      });
   });
  }

}
