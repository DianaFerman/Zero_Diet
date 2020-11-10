import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
  }
ingresar(){
  this.ruta.navigateByUrl("/opcion-login");
}
registro(){
  this.ruta.navigateByUrl("/registro");
}
}
