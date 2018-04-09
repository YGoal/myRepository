import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MatchProvider} from "../../providers/match/match";
import {BabyProvider} from "../../providers/baby/baby";
import {PropertiesProvider} from "../../providers/properties/properties";

/**
 * Generated class for the FileAttentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-file-attente',
  templateUrl: 'file-attente.html',
})
export class FileAttentePage {
  matchEnFile = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private properties: PropertiesProvider, public matchProvider: MatchProvider, public babyProvider: BabyProvider) {
    this.loadMatchs();
  }

  loadMatchs() {
    let x = this.babyProvider.getBabyById(this.properties.idBaby);
    x.subscribe((value) => {
      let babyPr = <object>value;
      this.properties.baby = babyPr[0];
      let baby = babyPr[0];
      this.matchEnFile = [];

      for (let y = 0;y < baby['file'].length;y++){
        let t = this.matchProvider.getMatchById(baby['file'][y]);
        t.subscribe((value) => {
          this.matchEnFile.push(value[0]);
        });
      }
      console.error(this.matchEnFile);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileAttentePage');
  }

}
