import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'galeria-estudio', pathMatch: 'full' },
  {
    path: 'galeria-estudio',
    loadChildren: () => import('./vistas/galeria-estudio/galeria-estudio.module').then( m => m.GaleriaEstudioPageModule)
  },
  {
    path: 'galeria-tatuador',
    loadChildren: () => import('./vistas/galeria-tatuador/galeria-tatuador.module').then( m => m.GaleriaTatuadorPageModule)
  },
  {
    path: 'acceder',
    loadChildren: () => import('./vistas/acceder/acceder.module').then( m => m.AccederPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./vistas/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'administracion',
    loadChildren: () => import('./vistas/administracion/administracion.module').then( m => m.AdministracionPageModule)
  },
  {
    path: 'agendar',
    loadChildren: () => import('./vistas/agendar/agendar.module').then( m => m.AgendarPageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./vistas/terminos/terminos.module').then( m => m.TerminosPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./vistas/pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'galeria-general',
    loadChildren: () => import('./vistas/galeria-general/galeria-general.module').then( m => m.GaleriaGeneralPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
