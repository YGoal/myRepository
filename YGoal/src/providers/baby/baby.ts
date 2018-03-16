import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";

/*
  Generated class for the BabyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BabyProvider {

  constructor(public http: Http, public database: AngularFireDatabase) {
    console.log('Hello BabyProvider Provider');
  }

  add(object) {
    this.database.list('Baby').push([{
      adresse: object["adresse"],
      nom: object["nom"],
      matchEnCour: object["matchEnCour"],
      fileAttente: object["fileAttente"],
      nbPlacesMax: object["nbPlacesMax"]
    }]);
  }

  update(id, object) {
    this.database.object("Baby/" + id).update({
      adresse: object["adresse"],
      nom: object["nom"],
      matchEnCour: object["matchEnCour"],
      fileAttente: object["fileAttente"],
      nbPlacesMax: object["nbPlacesMax"]
    });
  }

  remove(id) {
    this.database.object("Baby/" + id).remove()
  }

  getAllBaby() {
    return this.database.list("Baby")
      .valueChanges()
  }

  getBabyById(id) {
    return this.database.list("Baby/"+id)
      .valueChanges();
  }
  getBabyByName(name) {
    return this.database.list("Baby", ref => ref.orderByChild('nom').equalTo(name))
      .valueChanges();
  }
  getBabyByAdresse(adresse) {
    return this.database.list("Baby", ref => ref.orderByChild('adresse').equalTo(adresse))
      .valueChanges();
  }
}



// removeBaby() {
//   this.baby.remove("-L0t9hFMa-xBQritup97");
// }
//
// updateBaby() {
//   this.baby.update("-L0tA6zB6HMzE2PduvAU",{
//     adresse: "test",
//     nom: "test",
//     nbPlacesMax: 888888
//   })
// }

// addBaby() {
//   this.add({
//     adresse: "27 rue raoul servant",
//     nom: "YNOV LYON",
//     matchEnCour: "-L0xeRotPxsNt7ButDfc",
//     fileAttente: ["-L0xWKQWGM5aVpOjV8Hy"],
//     nbPlacesMax: 4
//   });
//   this.add({
//     adresse: "27 rue raoul servant",
//     nom: "YNOV LYON 2",
//     matchEnCour: "-L0xeRotPxsNt7ButDfc",
//     fileAttente: ["-L0xWKQWGM5aVpOjV8Hy"],
//     nbPlacesMax: 4
//   });
//   this.add({
//     adresse: "27 rue raoul servant",
//     nom: "YNOV LYON 3",
//     matchEnCour: "-L0xeRotPxsNt7ButDfc",
//     fileAttente: ["-L0xWKQWGM5aVpOjV8Hy"],
//     nbPlacesMax: 4
//   });
// }
