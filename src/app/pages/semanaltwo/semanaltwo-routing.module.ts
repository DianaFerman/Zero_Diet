import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemanaltwoPage } from './semanaltwo.page';

const routes: Routes = [
  {
    path: '',
    component: SemanaltwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemanaltwoPageRoutingModule {}
