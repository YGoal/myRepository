import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {getResponseURL} from "@angular/http/src/http_utils";
import { AngularFireAuth } from 'angularfire2/auth';

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
  private auth: any;
  constructor(public http: Http, private afAuth: AngularFireAuth) {
    console.log('Hello UserProvider Provider');
    this.auth=afAuth;
  }

  getUsers(){
    return this.http.get(API)
      .map(response => response.json());
  }

  /*forgotPasswordUser(email: any){
    return this.afAuth.sendPasswordResetEmail(email);
  }*/

}
