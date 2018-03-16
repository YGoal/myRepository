import { Component } from '@angular/core';

import { MatchsPage } from '../matchs/matchs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  matchPage : any;
  constructor() {
    this.matchPage = MatchsPage;
  }
}
