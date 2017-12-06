import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../../../YGoal/myRepository/YGoal/src/models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { Dialogs } from '@ionic-native/dialogs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,private dialogs: Dialogs,

    public navCtrl: NavController, public navParams: NavParams) {
  }


  async login(user: User){
    try{
      const result =  this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);

      if(result){
        this.navCtrl.push('AccueilPage');
      }else{
        this.dialogs.alert('Email ou mot de passe incorrect')
          .then(() => console.log('Dialog dismissed'))
          .catch(e => console.log('Error displaying dialog', e));
      }
    }
    catch(e){
      console.log(e);
    }
    }

  register(){
    this.navCtrl.push('RegisterPage');
  }

}
