import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastraAutorPage } from './cadastra-autor';

@NgModule({
  declarations: [
    CadastraAutorPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastraAutorPage),
  ],
})
export class CadastraAutorPageModule {}
