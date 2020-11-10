import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tabs2Page } from './tabs2.page';

const routes: Routes = [
  {
    path: '',
    component: Tabs2Page,

    children:[
    {
      path:'lista-pacientes',
      loadChildren: () => import('../lista-pacientes/lista-pacientes.module').then( m => m.ListaPacientesPageModule)
    },

    {
      path:'session',
      loadChildren: () => import('../cerrarsesion/cerrarsesion.module').then( m => m.CerrarsesionPageModule)
    },
    {
      path:'perfil/:id',
      loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
    },
    


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tabs2PageRoutingModule {}
