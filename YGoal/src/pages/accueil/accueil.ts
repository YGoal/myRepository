import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {MatchProvider} from "../../providers/match/match";
import {BabyProvider} from "../../providers/baby/baby";
import {MatchsPage} from "../matchs/matchs";
import {QrReaderPage} from "../qr-reader/qr-reader";

import {MenuComponent} from "../../components/menu/menu";
import {PropertiesProvider} from "../../providers/properties/properties";
import {FileAttentePage} from "../file-attente/file-attente";


/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {
  actualMatch;
  isBabyUse = false;
  baby = {};
  history;

  //@ViewChild(MenuComponent) private menuTabs : MenuComponent;

  constructor(public navCtrl: NavController, public matchProvider: MatchProvider, public babyProvider: BabyProvider, public navParams: NavParams, private properties: PropertiesProvider) {
    this.actualMatch = {
      score1: 0,
      score2: 0,
    };

    if (properties.idBaby != null) {
      this.loadMatchs();
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

  checkBabyUse() {
    if (this.properties.baby['matchEnCour'] != undefined) {
      let z = this.matchProvider.getMatchById(this.properties.baby['matchEnCour']);
      z.subscribe((value) => {
        let match = <object>value;
        this.actualMatch = match[0];
      });
      return true;
    } else {
      return false;
    }
  }

  importBabyId(){
    this.navCtrl.setRoot(QrReaderPage);
  }

  goToMatchCrea() {
    this.navCtrl.setRoot(MatchsPage);
  }
  goToFileAttente() {
    this.navCtrl.setRoot(FileAttentePage);
  }

  loadMatchs() {
    let x = this.babyProvider.getBabyById(this.properties.idBaby);
    x.subscribe((value) => {
      let baby = <object>value;
      this.properties.baby = baby[0];
      this.isBabyUse = this.checkBabyUse();

      let t = this.matchProvider.getMatchsByIdStatut(this.properties.idBaby + "~1");
      t.subscribe((value) => {
        this.history = value;
      });
    });
  }
}
