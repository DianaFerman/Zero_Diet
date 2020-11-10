import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [

  {
    path: '',
    component: TabsPage,
    children:[
      {
      path:'perfil/:id',
      loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
    },
    {
    path:'daydiet',
    loadChildren: () => import('../dietadiaria/dietadiaria.module').then( m => m.DietadiariaPageModule)
    },
    {
    path:'comprar',
    loadChildren: () => import('../comprar/comprar.module').then( m => m.ComprarPageModule)
    },
    {
    path:'session',
    loadChildren: () => import('../cerrarsesion/cerrarsesion.module').then( m => m.CerrarsesionPageModule)
    },
    {
      path: 'semanalone',
      loadChildren: () => import('../semanalone/semanalone.module').then( m => m.SemanalonePageModule)
    },
    {
      path: 'semanaltwo',
      loadChildren: () => import('../semanaltwo/semanaltwo.module').then( m => m.SemanaltwoPageModule)
    },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
