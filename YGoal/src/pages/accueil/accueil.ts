import {Component, ViewChild} from '@angular/core';
import {UserProvider} from "../../providers/user/user";
import {NavController, NavParams} from 'ionic-angular';

import {MatchProvider} from "../../providers/match/match";
import {BabyProvider} from "../../providers/baby/baby";
import {MatchsPage} from "../matchs/matchs";
import {MenuComponent} from "../../components/menu/menu";
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner';
import {PropertiesProvider} from "../../providers/properties/properties";
import {FileAttentePage} from "../file-attente/file-attente";
import {LoginPage} from "../login/login";
import {ProfilePage} from "../profile/profile";


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

  //@ViewChild(MenuComponent) menuTabs;
  user = {} as UserProvider;


  constructor(public userService : UserProvider, public navCtrl: NavController, public matchProvider: MatchProvider, public babyProvider: BabyProvider, public navParams: NavParams, private qrScanner: QRScanner, private properties: PropertiesProvider) {
  //@ViewChild(MenuComponent) private menuTabs : MenuComponent;
    this.actualMatch = {
      score1: 0,
      score2: 0,
    };
    this.user = userService;

    if (properties.idBaby != null) {
      this.loadMatchs();
    }
  }

  importBabyId() {
    // window.document.querySelector('ion-app').classList.add('transparentBody');
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            this.properties.idBaby = text;
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
            this.loadMatchs();
          });
          this.qrScanner.show();
        } else if (status.denied) {
          // window.document.querySelector('ion-app').classList.remove('transparentBody');
        } else {
          this.properties.idBaby = "-L7dm8OdqKWtOoKfJLhZ";
          this.loadMatchs();
          // window.document.querySelector('ion-app').classList.remove('transparentBody');
        }
      })
      .catch((e: any) => {
        console.error('Error is : ', e);
        this.properties.idBaby = "-L7dm8OdqKWtOoKfJLhZ";
        this.loadMatchs();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

  logout(){
    this.userService.signOut();
    this.navCtrl.setRoot(LoginPage);
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
