import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculaPesoPage } from './calcula-peso.page';

const routes: Routes = [
  {
    path: '',
    component: CalculaPesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculaPesoPageRoutingModule {}
