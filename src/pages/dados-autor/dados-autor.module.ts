import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosAutorPage } from './dados-autor';

@NgModule({
  declarations: [
    DadosAutorPage,
  ],
  imports: [
    IonicPageModule.forChild(DadosAutorPage),
  ],
})
export class DadosAutorPageModule {}
