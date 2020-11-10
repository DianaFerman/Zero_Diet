import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  IMC;
  PesoIdeal;
  constructor(private ruta:Router,private rutaActivada:ActivatedRoute) { }

  ngOnInit() {
    this.rutaActivada.params.subscribe(params => {
      this.IMC=params.IMC;
      this.PesoIdeal=params.PesoIdeal;
      
  });
  }

  siguiente(){
    this.ruta.navigateByUrl("/start");
  }

}

