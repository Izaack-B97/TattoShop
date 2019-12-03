import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CabezeraUsuarioComponent } from './cabezera-usuario/cabezera-usuario.component';
import { CabezeraUsuarioRetornoComponent } from './cabezera-usuario-retorno/cabezera-usuario-retorno.component';



@NgModule({
  declarations: [
    CabezeraUsuarioComponent,
    CabezeraUsuarioRetornoComponent
  ],
  exports: [
    CabezeraUsuarioComponent,
    CabezeraUsuarioRetornoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
