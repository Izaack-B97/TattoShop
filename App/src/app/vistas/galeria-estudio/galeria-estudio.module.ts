import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaEstudioPageRoutingModule } from './galeria-estudio-routing.module';

import { GaleriaEstudioPage } from './galeria-estudio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaEstudioPageRoutingModule
  ],
  declarations: [GaleriaEstudioPage]
})
export class GaleriaEstudioPageModule {}
