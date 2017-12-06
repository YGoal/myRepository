import {Injectable, NgModule} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Match} from "../../entities/Match";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MatchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MatchProvider {

  public Match: Observable<any[]>;

  constructor(public http: Http, public database: AngularFireDatabase) {
    console.info('Call of MatchProvider');
    this.Match = database.list("Match").valueChanges();
    console.error(this.Match);
    console.error(this.Match[0]);
  }

  getMatchById(id: number) {
    let obj = {};
    return new Match(obj);
  }

  getMatchsByStatut(statut: number) {

  }

  getMatchsByIdBaby(idBaby: number) {

  }

}
