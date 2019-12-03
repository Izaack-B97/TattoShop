import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaChatPage } from './lista-chat.page';
import {ComponentesModule} from '../../componentes/componentes.module';

const routes: Routes = [
  {
    path: '',
    component: ListaChatPage
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
  declarations: [ListaChatPage]
})
export class ListaChatPageModule {}
