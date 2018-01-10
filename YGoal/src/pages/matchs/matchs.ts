import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MatchProvider} from "../../providers/match/match";
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the MatchsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matchs',
  templateUrl: 'matchs.html',
})
export class MatchsPage {

  victoire;
  nbJoueur;
  conditoinVictoire;
  equipe1;
  equipe2;
  typeRecherche;


  constructor(public navCtrl: NavController, public navParams: NavParams, public matchProvider: MatchProvider, private alertCtrl: AlertController) {
    this.conditoinVictoire = 10;
    this.nbJoueur = 2;
    this.victoire = "nbBut";
    this.typeRecherche = "creation";
    this.onNbJoueurChange(null);
  }

  ionViewDidLoad() {
  }

  onNbJoueurChange(event) {
    this.equipe1 = [];
    this.equipe2 = [];
    if (this.typeRecherche == 'creation') {
      let nbJoueurEqupe1 = Math.floor((this.nbJoueur / 2 + this.nbJoueur % 2));
      let nbJoueurEqupe2 = Math.floor((this.nbJoueur / 2));
      for (let i = 0; i < nbJoueurEqupe1; i++) {
        this.equipe1.push({
          player: i,
          name: "Joueur " + (<number>i + <number>1)
        })
      }
      for (let i = 0; i < nbJoueurEqupe2; i++) {
        this.equipe2.push({
          player: i + nbJoueurEqupe1,
          name: "Joueur " + (<number>i + <number>nbJoueurEqupe1 + <number>1)
        })
      }
    } else {
      let nbJoueurEqupe2;
      if(this.nbJoueur < 5){
        nbJoueurEqupe2 = this.nbJoueur;
      } else {
        nbJoueurEqupe2 = 4;
      }

      for (let i = 0; i < nbJoueurEqupe2; i++) {
        this.equipe2.push({
          player: i,
          name: "Joueur " + (<number>i  + <number>1)
        })
      }
    }

  }

  changeNomJoueur(equipe, numero) {
    let alert = this.alertCtrl.create({
      title: 'Changement de Nom',
      inputs: [
        {
          name: 'nom',
          placeholder: 'Nom du joueur'
        }
      ],
      buttons: [
        {
          text: 'Changement de Nom',
          handler: data => {
            if (equipe === 1) {
              this.equipe1[numero]['name'] = data['nom'];
            } else if (equipe === 2) {
              this.equipe2[numero]['name'] = data['nom'];
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }

  createMatch() {
    this.matchProvider.add({

      typeRecherche: this.typeRecherche,
      idBaby: 999,
      score1: 0,
      score2: 0,
      equipe1: this.equipe1,
      equipe2: this.equipe2,
      typeVictoire: this.victoire,
      conditionVictoire: this.conditoinVictoire,
      statut: 0
    });
  }

}
