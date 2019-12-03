import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaChatEmpresaPage } from './lista-chat-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: ListaChatEmpresaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaChatEmpresaPage]
})
export class ListaChatEmpresaPageModule {}
