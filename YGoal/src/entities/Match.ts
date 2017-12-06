export class Match {

  private _id;
  private _equipe1;
  private _equipe2;
  private _statut;
  private _score1;
  private _score2;
  private _idBaby;
  private _date;

  constructor(obj:object) {
    this._id = obj["id"];
    this._equipe1 = obj["equipe1"];
    this._equipe2 = obj["equipe2"];
    this._statut = obj["statut"];
    this._score1 = obj["score1"];
    this._score2 = obj["score2"];
    this._idBaby = obj["idBaby"];
    this._date = obj["date"];
  }


  get id() {
    return this._id;
  }

  set equipe1(value) {
    this._equipe1 = value;
  }

  set equipe2(value) {
    this._equipe2 = value;
  }

  set statut(value) {
    this._statut = value;
  }

  set score1(value) {
    this._score1 = value;
  }

  set score2(value) {
    this._score2 = value;
  }

  set idBaby(value) {
    this._idBaby = value;
  }

  set date(value) {
    this._date = value;
  }

  get equipe1() {
    return this._equipe1;
  }

  get equipe2() {
    return this._equipe2;
  }

  get statut() {
    return this._statut;
  }

  get score1() {
    return this._score1;
  }

  get score2() {
    return this._score2;
  }

  get idBaby() {
    return this._idBaby;
  }

  get date() {
    return this._date;
  }
}
