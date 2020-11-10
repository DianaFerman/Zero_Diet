import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-opcion-login',
  templateUrl: './opcion-login.page.html',
  styleUrls: ['./opcion-login.page.scss'],
})
export class OpcionLoginPage implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
  }
  ingresar(){
    this.ruta.navigateByUrl("/login");
  }

  ingresar2(){
    this.ruta.navigateByUrl("/login-doc");
  }

}
