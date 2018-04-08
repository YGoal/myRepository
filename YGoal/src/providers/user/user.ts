import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {getResponseURL} from "@angular/http/src/http_utils";
import { AngularFireAuth } from 'angularfire2/auth';
import {AccueilPage} from "../../pages/accueil/accueil";
import {NavController} from "ionic-angular";
import * as firebase from 'firebase';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API: string = "https://ygoal-e23de.firebaseio.com/Users.json";
@Injectable()
export class UserProvider {
  public email;
  public password;
  public auth: any;
  constructor(public http: Http, public afAuth: AngularFireAuth) {
    console.log('Hello UserProvider Provider');
    this.auth=afAuth;
  }

  getUsers(){
    return this.http.get(API)
      .map(response => response.json());
  }

  public signOut() {
    this.afAuth.auth.signOut();
    console.log(this.afAuth.auth.signOut());
  }

  public forgotPasswordUser(email: string){
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email);
    //console.log("AUTH " + this.auth)
    //this.auth.sendPasswordResetEmail(email,null);
  }


}
