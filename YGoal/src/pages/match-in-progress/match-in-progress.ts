import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MenuComponent} from "../../components/menu/menu";
import {PropertiesProvider} from "../../providers/properties/properties";
import {MatchProvider} from "../../providers/match/match";
import {BabyProvider} from "../../providers/baby/baby";

/**
 * Generated class for the MatchInProgressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-match-in-progress',
  templateUrl: 'match-in-progress.html',
})
export class MatchInProgressPage {
  actualMatch = null;

  //@ViewChild(MenuComponent) private menuTabs : MenuComponent;

  constructor(public navCtrl: NavController, public matchProvider: MatchProvider, public babyProvider: BabyProvider, public navParams: NavParams, private properties: PropertiesProvider) {
    if (properties.idBaby != null) {
      this.loadMatchs();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchInProgressPage');
  }

  loadMatchs() {
    let x = this.babyProvider.getBabyById(this.properties.idBaby);
    x.subscribe((value) => {
      let baby = <object>value;
      this.properties.baby = baby[0];
    });
    let z = this.matchProvider.getMatchById(this.properties.baby['matchEnCour']);
    z.subscribe((value) => {
      let match = <object>value;
      this.actualMatch = match[0];
      console.log(this.actualMatch);
      for (let y = 0; y < this.actualMatch.buts.length;y++){
        let t = this.actualMatch.buts[y];
        t['min'] = Math.floor((parseInt(t['datetime']) - parseInt(this.actualMatch.timestampMatchStart)) /1000 /60) + "'" + Math.floor((t['datetime'] - this.actualMatch.timestampMatchStart)/1000%60);
        this.actualMatch.buts[y] = t;
      }
    });
  }
}
