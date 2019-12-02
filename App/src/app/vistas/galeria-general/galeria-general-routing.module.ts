import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaGeneralPage } from './galeria-general.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaGeneralPageRoutingModule {}
