import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {getResponseURL} from "@angular/http/src/http_utils";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API: string = "https://ygoal-e23de.firebaseio.com/Users.json";
@Injectable()
export class UserProvider {

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  getUsers(){
    return this.http.get(API)
      .map(response => response.json());
  }

}
