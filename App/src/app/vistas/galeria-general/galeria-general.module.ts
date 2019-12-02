import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaGeneralPageRoutingModule } from './galeria-general-routing.module';

import { GaleriaGeneralPage } from './galeria-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaGeneralPageRoutingModule
  ],
  declarations: [GaleriaGeneralPage]
})
export class GaleriaGeneralPageModule {}
