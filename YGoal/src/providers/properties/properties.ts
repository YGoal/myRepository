import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the PropertiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PropertiesProvider {

  private _idBaby;
  private _baby;
  private _user;

  constructor() {
    console.log('Hello PropertiesProvider Provider');
    this._idBaby = null;
  }


  get idBaby() {
    return this._idBaby;
  }

  set idBaby(value) {
    this._idBaby = value;
  }


  get baby() {
    return this._baby;
  }

  set baby(value) {
    this._baby = value;
  }

  get user() {
    return this._user;
  }

  set user(value) {
    this._user = value;
  }
}
