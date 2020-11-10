import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietadiariaPage } from './dietadiaria.page';

const routes: Routes = [
  {
    path: '',
    component: DietadiariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietadiariaPageRoutingModule {}
