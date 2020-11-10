import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
  }

  login(){
    this.ruta.navigateByUrl("/start");
  }
  paginacion(){
    this.ruta.navigateByUrl("/calcula-peso");
  }

}
