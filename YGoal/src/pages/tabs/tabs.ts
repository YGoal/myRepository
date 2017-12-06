import { Component } from '@angular/core';

import { ArticlePage } from '../article/article';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Statistiques } from '../statistiques/statistiques';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ArticlePage;
  tab3Root = ContactPage;
  tab4Root = Statistiques;

  constructor() {

  }
}
