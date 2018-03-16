import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";
import 'rxjs/add/operator/map';

/*
  Generated class for the MatchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MatchProvider {

  public Match: any;

  constructor(public http: Http, public database: AngularFireDatabase) {
  }

  add(object) {
    this.database.list('Match').push([{
      date:Date.now(),
      idBaby: object["idBaby"],
      typeRecherche: object["typeRecherche"],
      score1: object["score1"],
      score2: object["score2"],
      equipe1: object["equipe1"],
      equipe2: object["equipe2"],
      typeVictoire: object["typeVictoire"],
      conditionVictoire: object["conditionVictoire"],
      statut: object["statut"],
      idStatut: object["idBaby"]  + "~0",
    }]);
  }

  update(id, object) {
    this.database.object("Match/" + id).update([{
      idBaby: object["idBaby"],
      typeRecherche: object["typeRecherche"],
      score1: object["score1"],
      score2: object["score2"],
      equipe1: object["equipe1"],
      equipe2: object["equipe2"],
      typeVictoire: object["typeVictoire"],
      conditionVictoire: object["conditionVictoire"],
      statut: object["statut"],
      idStatut: object["idBaby"]  + "~" + String(object["statut"]),
    }]);
  }

  remove(id) {
    this.database.object("Match/" + id).remove()
  }

  getAllMatch() {
    return this.database.list("Match")
      .snapshotChanges()
  }

  getMatchById(id) {
    return this.database.list("Match/"+id)
      .valueChanges();
  }

  getMatchsByStatut(statut: number) {
    return this.database.list("Match", ref => ref.orderByChild('0/statut').equalTo(statut))
      .valueChanges();
  }
  getMatchsByIdStatut(idStatut: string) {
    return this.database.list("Match", ref => ref.orderByChild('0/idStatut').equalTo(idStatut))
      .valueChanges();
  }

  getMatchsByIdBaby(idBaby) {
    return this.database.list("Match", ref => ref.orderByChild('0/idBaby').equalTo(idBaby))
      .valueChanges();
  }
}

//
// addMatch() {
//   this.match.add({
//     idBaby: 50,
//     score1: 0,
//     score2: 0,
//     statut: 0
//   });
// }
//
// updateMatch() {
//   this.match.update("-L0sf00E9A69NGml1KKx",{
//     idBaby: 888,
//     score1: 888,
//     score2: 888,
//     statut: 888
//   })
// }
//
// removeMatch() {
//   this.match.remove("-L0t8ulyvpFPUTG6DY5o");
// }
