import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MatchProvider} from "../../providers/match/match";

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {
  actualMatch;

  constructor(public navCtrl: NavController, public matchProvider: MatchProvider, public navParams: NavParams) {
    this.actualMatch = matchProvider.getMatchById("-L0yUez3Vnm9y5MGy2rb");
    console.error(this.actualMatch);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

  goTo(str) {
    this.navCtrl.push(str);
  }
}
