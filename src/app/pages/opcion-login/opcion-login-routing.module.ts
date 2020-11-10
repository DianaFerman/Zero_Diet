import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionLoginPage } from './opcion-login.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionLoginPageRoutingModule {}
