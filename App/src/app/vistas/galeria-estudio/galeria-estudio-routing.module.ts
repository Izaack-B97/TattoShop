import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaEstudioPage } from './galeria-estudio.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaEstudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaEstudioPageRoutingModule {}
