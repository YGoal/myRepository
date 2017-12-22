import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ArticlePage } from '../pages/article/article';
import { ContactPage } from '../pages/contact/contact';
import { ArchivedTodosPage } from '../pages/archived-todos/archived-todos';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { TodoService } from '../providers/todo/todo';
import { Dialogs } from '@ionic-native/dialogs';

import { ProductService } from "../providers/product/product";
import { ProductDetailsPage } from "../pages/product-details/product-details";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UserProvider } from '../providers/user/user';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import {LogoComponent} from "../components/logo/logo";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    ArticlePage,
    HomePage,
    TabsPage,
    LoginPage,
    ArchivedTodosPage,
    ProductDetailsPage,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    ArticlePage,
    HomePage,
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
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    LogoComponent,
  ]
})
export class AppModule {}
