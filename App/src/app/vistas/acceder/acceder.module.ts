import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccederPageRoutingModule } from './acceder-routing.module';

import { AccederPage } from './acceder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccederPageRoutingModule
  ],
  declarations: [AccederPage]
})
export class AccederPageModule {}
