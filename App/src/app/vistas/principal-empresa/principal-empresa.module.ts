import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrincipalEmpresaPage } from './principal-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalEmpresaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrincipalEmpresaPage]
})
export class PrincipalEmpresaPageModule {}
