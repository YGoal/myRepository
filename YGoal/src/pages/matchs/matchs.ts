import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MatchProvider} from "../../providers/match/match";
import {AlertController} from 'ionic-angular';
import {MenuComponent} from "../../components/menu/menu";

import { PropertiesProvider } from "../../providers/properties/properties";
/**
 * Generated class for the MatchsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-matchs',
  templateUrl: 'matchs.html',
})
export class MatchsPage {

  @ViewChild(MenuComponent) menuTabs;

  victoire;
  nbJoueur;
  conditoinVictoire;
  equipe1;
  equipe2;
  typeRecherche;


  constructor(public navCtrl: NavController, public navParams: NavParams, public matchProvider: MatchProvider, private alertCtrl: AlertController, private properties: PropertiesProvider) {
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
      if (this.nbJoueur == 1) {
        nbJoueurEqupe1 = 1;
        nbJoueurEqupe2 = 1;
      }

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
      if (this.nbJoueur < 5) {
        nbJoueurEqupe2 = this.nbJoueur;
      } else {
        nbJoueurEqupe2 = 4;
      }

      for (let i = 0; i < nbJoueurEqupe2; i++) {
        this.equipe2.push({
          player: i,
          name: "Joueur " + (<number>i + <number>1)
        })
      }
    }

  }

  changeNomJoueur(equipe, numero) {
    let alert = this.alertCtrl.create({
      title: "Changer le nom d'un joueur",
      inputs: [
        {
          name: 'nom',
          placeholder: 'Nom du joueur'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Changer le nom',
          handler: data => {
            if (equipe === 1) {
              this.equipe1[numero]['name'] = data['nom'];
            } else if (equipe === 2) {
              this.equipe2[numero]['name'] = data['nom'];
            }
          }
        }
      ]
    });
    alert.present();
  }

  createMatch() {
    if(this.properties.idBaby != undefined){
      this.matchProvider.add({
        typeRecherche: this.typeRecherche,
        idBaby: this.properties.idBaby,
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
}
