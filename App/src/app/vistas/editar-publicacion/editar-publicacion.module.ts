import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditarPublicacionPage } from './editar-publicacion.page';

import {ComponentesModule} from '../../componentes/componentes.module';

const routes: Routes = [
  {
    path: '',
    component: EditarPublicacionPage
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
  declarations: [EditarPublicacionPage]
})
export class EditarPublicacionPageModule {}
