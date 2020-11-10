import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-semanalone',
  templateUrl: './semanalone.page.html',
  styleUrls: ['./semanalone.page.scss'],
})
export class SemanalonePage implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
  }
  siguiente(){
    this.ruta.navigateByUrl("/tabs/semanaltwo");
  }

}
