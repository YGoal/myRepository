import {NgModule, ErrorHandler} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ArticlePage} from '../pages/article/article';
import {ContactPage} from '../pages/contact/contact';
import {ArchivedTodosPage} from '../pages/archived-todos/archived-todos';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {TabsPage} from '../pages/tabs/tabs';
import {TodoService} from '../providers/todo/todo';
import {Dialogs} from '@ionic-native/dialogs';

import {ProductService} from "../providers/product/product";
import {ProductDetailsPage} from "../pages/product-details/product-details";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {UserProvider} from '../providers/user/user';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import {LogoComponent} from "../components/logo/logo";

import {FIREBASE_CONFIG} from "./app.firebase.config";
import {MatchProvider} from '../providers/match/match';
import {BabyProvider} from '../providers/baby/baby';
import { MenuComponent } from '../components/menu/menu';
import {AccueilPage} from "../pages/accueil/accueil";
import {MatchsPage} from "../pages/matchs/matchs";
import { QRScanner } from '@ionic-native/qr-scanner';
import { PropertiesProvider } from '../providers/properties/properties';
import {Camera} from "@ionic-native/camera";

import {Facebook} from '@ionic-native/facebook';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    AccueilPage,
    LoginPage,
    ArticlePage,
    HomePage,
    MatchsPage,
    TabsPage,
    LoginPage,
    ArchivedTodosPage,
    ProductDetailsPage,
    MenuComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,
    AccueilPage,
    ArticlePage,
    HomePage,
    MatchsPage,
    LoginPage,
    TabsPage,
    ArchivedTodosPage,
    ProductDetailsPage
  ],
  providers: [
    ProductService,
    TodoService,
    StatusBar,
    Dialogs,
    QRScanner,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    LogoComponent,
    MatchProvider,
    BabyProvider,
    Facebook,
    Camera,
    PropertiesProvider
  ],
  exports:[
    MenuComponent,
  ]
})
export class AppModule {
}
