import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user"
import {AngularFireAuth} from "angularfire2/auth";
import {Camera} from "@ionic-native/camera";
import firebase from 'firebase';
import {Facebook} from "@ionic-native/facebook";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as UserProvider;
  imageURI : any;
  imageFileName : any;
  public myPhotosRef: any;
  public myPhoto: any;
  public myPhotoURL: any;

  constructor(private afAuth: AngularFireAuth,
              public navCtrl: NavController,
              public navParams: NavParams,
              private camera: Camera,
              private alertCtrl: AlertController,
              public facebook:Facebook
              ) {
    this.myPhotoURL = "assets/imgs/bonhomme.jpg";
    this.myPhotosRef = firebase.storage().ref('/Photos/');
  }

  async register(user: UserProvider) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  }

  takePhoto() {
    this.camera.getPicture({
      quality: 100,
      targetWidth: 1200,
      targetHeight: 1200,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.PNG,
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto();
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  selectPhoto(): void {
    this.camera.getPicture({
      quality: 100,
      targetWidth: 1200,
      targetHeight: 1200,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.PNG,
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto();
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  private uploadPhoto(): void {
    let randomString = function(length) {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for(let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };
    let picname = "img-" + randomString(8) + ".png";
    this.myPhotosRef.child(picname)
      .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
      .then((savedPicture) => {
        this.myPhotoURL = savedPicture.downloadURL;
      });
  }

  choice(){
    let alert = this.alertCtrl.create({
      title: 'Où voulez prendre cette photo?',
      buttons: [
        {
          text: 'Caméra',
          handler: () => {
            this.takePhoto();
          }
        },
        {
          text: 'Galerie',
          handler: () => {
            this.selectPhoto();
          }
        }
      ]
    });
    alert.present();
  }

  fblogin(){
    this.facebook.login(['email']).then(res=>{
      const fc= firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
      firebase.auth().signInWithCredential(fc).then(fs=>{
        alert("firebase sec")
      }).catch(ferr=>{
        alert("firebase errc")
      })

    }).catch(err=>{
      alert(JSON.stringify(err))
    })
  }

}
