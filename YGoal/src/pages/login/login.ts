import {Component} from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { Dialogs } from '@ionic-native/dialogs';
import {AccueilPage} from "../accueil/accueil";
import {Facebook} from "@ionic-native/facebook";
import {AlertController} from 'ionic-angular';
import firebase from "firebase";
import {errorHandler} from "@angular/platform-browser/src/browser";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as UserProvider;

  constructor(private loadingCtrl : LoadingController, private afAuth: AngularFireAuth, private dialogs: Dialogs,
              public navCtrl: NavController, public navParams: NavParams,
              public facebook:Facebook, public alertCtrl : AlertController, public usersService : UserProvider) {
    this.user = usersService;
  }

  fblogin(){
    this.facebook.login(['email']).then(res=>{
      const fc= firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
      firebase.auth().signInWithCredential(fc).then(fs=>{
        alert("firebase sec")
      }).catch(ferr=>{
        alert("firebase errc")
      })

    }).catch(err=>{
        alert(JSON.stringify(err))
      })
  }


  async login(user: UserProvider) {
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(res => {
      this.navCtrl.setRoot(AccueilPage);
      console.log(result);

    }, err => {
      let msg;
      switch (err.code) {
        case "auth/wrong-password":
          msg = "Mot de passe invalide";
          break;

        case "auth/user-not-found":
          msg = "L'utilisateur n'exsite pas";
          break;

        case "auth/invalid-email":
          msg = 'Mail ou mot de passe invalide';
          break;


      }
      alert(msg);
    })
  };

  register() {
    this.navCtrl.push('RegisterPage');
  }



  showForgotPassword(){
    let prompt = this.alertCtrl.create({
      title: 'Entrez votre email',
      message: 'Un nouveau mot de passe va vous être envoyé',
      inputs: [
        {
          name: 'recoverEmail',
          placeholder: 'Votre email'
        },
      ],
      buttons:[
        {
          text: 'Quitter',
          handler: data => {
            console.log("On a cliqué sur quitter");
          }
        },
        {
          text: 'Submit',
          handler: data => {

            console.log("TEST : " + data.recoverEmail)

            let loading = this.loadingCtrl.create({
              dismissOnPageChange: true,
              content: "Mot de passe en train de se réinitialiser"
            })
            loading.present();

              this.usersService.forgotPasswordUser(data.recoverEmail).then(() => {
                loading.dismiss().then(() => {
                  let alert = this.alertCtrl.create({
                    title: "Aller voir vos mails !",
                    subTitle: "Mot de passe réinitialisé !",
                    buttons: ['OK']
                  })
                  alert.present();
                });
              }, error => {
                  let alert = this.alertCtrl.create({
                    title: "Erreur réinitialisation mot de passe",
                    subTitle: error.message,
                    buttons: ['OK']
                  })
                alert.present();
            })
            }
          }
      ]
    });
    prompt.present();
  }

  public presentAlert(msg:string) {
    let alert = this.alertCtrl.create({
      title: 'Attention',
      subTitle: msg,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
