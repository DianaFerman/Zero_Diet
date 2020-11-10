import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginDocPage } from './login-doc.page';

const routes: Routes = [
  {
    path: '',
    component: LoginDocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginDocPageRoutingModule {}
