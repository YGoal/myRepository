export class Baby {
  private _id;
  private _adresse;
  private _nom;
  private _nbPlaceMax;


  constructor(id, adresse, nom, nbPlaceMax) {
    this._id = id;
    this._adresse = adresse;
    this._nom = nom;
    this._nbPlaceMax = nbPlaceMax;
  }


  get id() {
    return this._id;
  }

  get adresse() {
    return this._adresse;
  }

  set adresse(value) {
    this._adresse = value;
  }

  get nom() {
    return this._nom;
  }

  set nom(value) {
    this._nom = value;
  }

  get nbPlaceMax() {
    return this._nbPlaceMax;
  }

  set nbPlaceMax(value) {
    this._nbPlaceMax = value;
  }
}
