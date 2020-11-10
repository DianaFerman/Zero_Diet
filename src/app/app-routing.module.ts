import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'genero',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'comprar',
    loadChildren: () => import('./pages/comprar/comprar.module').then( m => m.ComprarPageModule)
  },
  {
    path: 'cerrarsesion',
    loadChildren: () => import('./pages/cerrarsesion/cerrarsesion.module').then( m => m.CerrarsesionPageModule)
  },
  {
    path: 'genero',
    loadChildren: () => import('./pages/genero/genero.module').then( m => m.GeneroPageModule)
  },
  {
    path: 'calcula-peso',
    loadChildren: () => import('./pages/calcula-peso/calcula-peso.module').then( m => m.CalculaPesoPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'dietadiaria',
    loadChildren: () => import('./pages/dietadiaria/dietadiaria.module').then( m => m.DietadiariaPageModule)
  },
  {
    path: 'opcion-login',
    loadChildren: () => import('./pages/opcion-login/opcion-login.module').then( m => m.OpcionLoginPageModule)
  },
  {
    path: 'resultado',
    loadChildren: () => import('./pages/resultado/resultado.module').then( m => m.ResultadoPageModule)
  },
  {
    path: 'login-doc',
    loadChildren: () => import('./pages/login-doc/login-doc.module').then( m => m.LoginDocPageModule)
  },
  {
    path: 'lista-pacientes',
    loadChildren: () => import('./pages/lista-pacientes/lista-pacientes.module').then( m => m.ListaPacientesPageModule)
  },
  {
    path: 'empresa',
    loadChildren: () => import('./pages/empresa/empresa.module').then( m => m.EmpresaPageModule)
  },
  {
    path: 'empresalist',
    loadChildren: () => import('./pages/empresalist/empresalist.module').then( m => m.EmpresalistPageModule)
  },
  {
    path: 'presentacion',
    loadChildren: () => import('./pages/presentacion/presentacion.module').then( m => m.PresentacionPageModule)
  },
  {
    path: 'semanalone',
    loadChildren: () => import('./pages/semanalone/semanalone.module').then( m => m.SemanalonePageModule)
  },
  {
    path: 'semanaltwo',
    loadChildren: () => import('./pages/semanaltwo/semanaltwo.module').then( m => m.SemanaltwoPageModule)
  },
  {
    path: 'tabs2',
    loadChildren: () => import('./pages/tabs2/tabs2.module').then( m => m.Tabs2PageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
