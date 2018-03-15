import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchInProgressPage } from './match-in-progress';

@NgModule({
  declarations: [
    MatchInProgressPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchInProgressPage),
  ],
})
export class MatchInProgressPageModule {}
