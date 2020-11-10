import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresalistPage } from './empresalist.page';

const routes: Routes = [
  {
    path: '',
    component: EmpresalistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresalistPageRoutingModule {}
