import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/servicios/servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.page.html',
  styleUrls: ['./lista-pacientes.page.scss'],
})
export class ListaPacientesPage implements OnInit {
  usuarios:any=[];
 

  constructor(private servicio:Servicio,private ruta:Router) { }

  ngOnInit() {
    this.servicio.ObtenerUsuarios().then(data=>{
      console.log(data);
      this.usuarios=data.data.usuarios;
    });
  }
  caracteristicas(id){
    this.ruta.navigate(['/tabs2/perfil',id]);
  }

}


