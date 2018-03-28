import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";

import {MatchsPage} from "../../pages/matchs/matchs";
import {AccueilPage} from "../../pages/accueil/accueil";

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
    // {
    //   name: "accueil",
    //   src: this.assetsFolder + "Ycon3.png",
    //   component: MatchsPage
    // },
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
    console.warn("swipeLeft");

    let actualPage = this.foundActualIndex();

    console.warn("actualPagea",actualPage);

    actualPage++;

    console.warn("actualPagea",actualPage);
    console.warn( " this.pages.length - 1",this.pages.length - 1);

    if (actualPage === this.pages.length) {
      actualPage = 0;
    }

    console.warn(actualPage);

    this.navCtrl.setRoot(this.pages[actualPage].component);

  }

  public swipeRight() {
    console.warn("swipeRight");

    let actualPage = this.foundActualIndex();
    actualPage--;

    console.warn("actualPagea",actualPage);
    console.warn( " this.pages.length - 1",this.pages.length - 1);

    if (actualPage < 0) {
      actualPage = this.pages.length - 1;
    }

    console.warn("actualPagea",actualPage);

    this.navCtrl.setRoot(this.pages[actualPage].component);
  }

}
