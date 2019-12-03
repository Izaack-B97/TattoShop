import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescripcionPage } from './descripcion.page';
import {ComponentesModule} from '../../componentes/componentes.module';

const routes: Routes = [
  {
    path: '',
    component: DescripcionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentesModule
  ],
  declarations: [DescripcionPage]
})
export class DescripcionPageModule {}
