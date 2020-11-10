import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PesoModel } from 'src/app/Models/CalculaPeso';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calcula-peso',
  templateUrl: './calcula-peso.page.html',
  styleUrls: ['./calcula-peso.page.scss'],
})
export class CalculaPesoPage implements OnInit {
  
  constructor(private ruta:Router,public navCtrl: NavController) { }

  ngOnInit() {
   
  }

  onSubmit(mensaje){
    const peso=mensaje.value.pesoActual;
    const estatura=mensaje.value.estatura;
    if(peso!=undefined && estatura!=undefined && !isNaN(peso) && !isNaN(estatura)){
    const cuadrado=estatura*estatura;
    const IMC=peso/cuadrado;
    const PesoIdeal= ((estatura*100)-100)*0.90;


    console.log(IMC);
    this.ruta.navigate(["/resultado",{IMC:IMC.toFixed(2), PesoIdeal:PesoIdeal}]);

    console.log(PesoIdeal);
    
    
     



    }
    else{
      console.log("llena los campos");
    }
  }
}
