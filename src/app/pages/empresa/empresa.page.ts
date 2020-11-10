import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
  }
  Si(){
    this.ruta.navigateByUrl("/empresalist");
  }
  No(){
    this.ruta.navigateByUrl("/registro");
  }

}
