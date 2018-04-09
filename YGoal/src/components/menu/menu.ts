import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";

import {MatchsPage} from "../../pages/matchs/matchs";
import {AccueilPage} from "../../pages/accueil/accueil";
import {MatchInProgressPage} from "../../pages/match-in-progress/match-in-progress";
import {ProfilePage} from "../../pages/profile/profile";

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-tabs',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  assetsFolder = "assets/imgs/";
  pages = [
    {
      name: "accueil",
      src: this.assetsFolder + "Ycon1.png",
      component: AccueilPage,
    },
    {
      name: "crea-match",
      src: this.assetsFolder + "Ycon2.png",
      component: MatchsPage,
    },
    {
      name: "in-progress-match",
      src: this.assetsFolder + "Ycon3.png",
      component: MatchInProgressPage
    },
    {
      name: "profile",
      src: this.assetsFolder + "Ycon4.png",
      component: ProfilePage
    },
    // {
    //   name: "crea-match",
    //   src: this.assetsFolder + "Ycon4.png",
    //   component: MatchsPage
    // },
    // {
    //   name: "accueil",
    //   src: this.assetsFolder + "Ycon5.png",
    //   component: MatchsPage
    // }
  ];

  @Input() page: string;

  constructor(public navCtrl: NavController) {
  }

  goTo(el) {
    this.navCtrl.setRoot(el.component);
  }

  foundActualIndex() {
    for (let y = 0; y < this.pages.length; y++) {
      if (this.pages[y].name === this.page) {
        return y;
      }
    }
  }

  public swipeLeft() {
    let actualPage = this.foundActualIndex();
    actualPage++;

    if (actualPage === this.pages.length) {
      actualPage = 0;
    }

    this.navCtrl.setRoot(this.pages[actualPage].component);

  }

  public swipeRight() {
    let actualPage = this.foundActualIndex();
    actualPage--;

    if (actualPage < 0) {
      actualPage = this.pages.length - 1;
    }

    this.navCtrl.setRoot(this.pages[actualPage].component);
  }

}
