import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaTatuadorPageRoutingModule } from './galeria-tatuador-routing.module';

import { GaleriaTatuadorPage } from './galeria-tatuador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaTatuadorPageRoutingModule
  ],
  declarations: [GaleriaTatuadorPage]
})
export class GaleriaTatuadorPageModule {}
