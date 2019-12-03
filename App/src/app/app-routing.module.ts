import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guardianes/autorizado.guard';
import { NoAutorizadoGuard } from './guardianes/no-autorizado.guard';
import { RedireccionGuard } from './guardianes/redireccion.guard';

const routes: Routes = [
  { path: '', redirectTo: 'acceder', pathMatch: 'full' },
  { path: 'principal', loadChildren: './vistas/principal/principal.module#PrincipalPageModule', canActivate: [AutorizadoGuard] },
  { path: 'acceder', loadChildren: './vistas/acceder/acceder.module#AccederPageModule', canActivate: [NoAutorizadoGuard] },
  { path: 'chat', loadChildren: './vistas/chat/chat.module#ChatPageModule', canActivate: [AutorizadoGuard] },
  // tslint:disable-next-line: max-line-length
  { path: 'crear-publicacion', loadChildren: './vistas/crear-publicacion/crear-publicacion.module#CrearPublicacionPageModule', canActivate: [AutorizadoGuard] },
  { path: 'descripcion', loadChildren: './vistas/descripcion/descripcion.module#DescripcionPageModule', canActivate: [AutorizadoGuard] },
  { path: 'perfil', loadChildren: './vistas/perfil/perfil.module#PerfilPageModule', canActivate: [AutorizadoGuard] },
  { path: 'lista-chat', loadChildren: './vistas/lista-chat/lista-chat.module#ListaChatPageModule', canActivate: [AutorizadoGuard] },
  // tslint:disable-next-line: max-line-length
  { path: 'lista-chat-empresa', loadChildren: './vistas/lista-chat-empresa/lista-chat-empresa.module#ListaChatEmpresaPageModule', canActivate: [AutorizadoGuard] },
  // tslint:disable-next-line: max-line-length
  { path: 'lista-promociones', loadChildren: './vistas/lista-promociones/lista-promociones.module#ListaPromocionesPageModule', canActivate: [AutorizadoGuard] },
  // tslint:disable-next-line: max-line-length
  { path: 'principal-empresa', loadChildren: './vistas/principal-empresa/principal-empresa.module#PrincipalEmpresaPageModule', canActivate: [AutorizadoGuard] },
  { path: 'registro', loadChildren: './vistas/registro/registro.module#RegistroPageModule', canActivate: [NoAutorizadoGuard] },
  { path: 'chat-empresa', loadChildren: './vistas/chat-empresa/chat-empresa.module#ChatEmpresaPageModule', canActivate: [AutorizadoGuard] },
  // tslint:disable-next-line: max-line-length
  { path: 'editar-publicacion', loadChildren: './vistas/editar-publicacion/editar-publicacion.module#EditarPublicacionPageModule', canActivate: [AutorizadoGuard] },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
