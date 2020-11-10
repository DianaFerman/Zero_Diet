import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemanalonePage } from './semanalone.page';

const routes: Routes = [
  {
    path: '',
    component: SemanalonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemanalonePageRoutingModule {}
