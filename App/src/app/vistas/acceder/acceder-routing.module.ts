import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccederPage } from './acceder.page';

const routes: Routes = [
  {
    path: '',
    component: AccederPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccederPageRoutingModule {}
