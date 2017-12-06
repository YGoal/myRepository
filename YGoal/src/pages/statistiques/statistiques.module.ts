import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Statistiques } from './statistiques';

@NgModule({
  declarations: [
    Statistiques,
  ],
  imports: [
    IonicPageModule.forChild(Statistiques),
  ],
})
export class StatistiquesModule {}
