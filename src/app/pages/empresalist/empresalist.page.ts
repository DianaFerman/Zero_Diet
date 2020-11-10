import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-empresalist',
  templateUrl: './empresalist.page.html',
  styleUrls: ['./empresalist.page.scss'],
})
export class EmpresalistPage implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
  }
  Registro(){
    this.ruta.navigateByUrl("/registro");
  }

}
