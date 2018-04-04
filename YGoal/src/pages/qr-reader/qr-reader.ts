import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";
import {PropertiesProvider} from "../../providers/properties/properties";
import {AccueilPage} from "../accueil/accueil";

/**
 * Generated class for the QrReaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-qr-reader',
  templateUrl: 'qr-reader.html',
})
export class QrReaderPage {

  constructor(public navCtrl: NavController, private properties: PropertiesProvider, public navParams: NavParams, private qrScanner: QRScanner) {
  }

  ionViewDidLoad() {
    window.document.querySelector('ion-app').classList.add('transparentBody');
    console.log('ionViewDidLoad QrReaderPage');
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            this.properties.idBaby = text;
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
            window.document.querySelector('ion-app').classList.remove('transparentBody');
            this.navCtrl.setRoot(AccueilPage);
          });
          this.qrScanner.show();
        } else if (status.denied) {
          window.document.querySelector('ion-app').classList.remove('transparentBody');
          this.navCtrl.setRoot(AccueilPage);
        } else {
          this.properties.idBaby = "-L7dm8OdqKWtOoKfJLhZ";
          window.document.querySelector('ion-app').classList.remove('transparentBody');
          this.navCtrl.setRoot(AccueilPage);
        }
      })
      .catch((e: any) => {
        console.error('Error is : ', e);
        this.properties.idBaby = "-L7dm8OdqKWtOoKfJLhZ";
        window.document.querySelector('ion-app').classList.remove('transparentBody');
        this.navCtrl.setRoot(AccueilPage);
      });
  }

}
