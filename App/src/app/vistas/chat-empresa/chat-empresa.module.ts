import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChatEmpresaPage } from './chat-empresa.page';
import {ComponentesModule} from '../../componentes/componentes.module';

const routes: Routes = [
  {
    path: '',
    component: ChatEmpresaPage
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
  declarations: [ChatEmpresaPage]
})
export class ChatEmpresaPageModule {}
