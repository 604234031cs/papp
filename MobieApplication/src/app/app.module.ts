import { AddVanPage } from './../pages/add-van/add-van';
import { ShowMapTrakingPage } from './../pages/show-map-traking/show-map-traking';
import { ShowDriverPage } from './../pages/show-driver/show-driver';
import { ShowRouteTrakingPage } from './../pages/show-route-traking/show-route-traking';
import { ShowMapPage } from './../pages/show-map/show-map';
import { ShowRoutePage } from './../pages/show-route/show-route';
import { FuntionPassengerPage } from './../pages/funtion-passenger/funtion-passenger';
import { HomePassengerPage } from './../pages/home-passenger/home-passenger';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { HomePage } from '../pages/home/home';
import { HomeDriverPage } from '../pages/home-driver/home-driver';
import { TrackingPassengerPage } from '../pages/tracking-passenger/tracking-passenger';

// Module ionic
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

// Native ionic
import { Geolocation } from '@ionic-native/geolocation';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';
import { Dialogs } from '@ionic-native/dialogs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    HomeDriverPage,
    HomePassengerPage,
    TrackingPassengerPage,
    FuntionPassengerPage,
    ShowRoutePage,
    ShowMapPage,
    ShowRouteTrakingPage,
    ShowDriverPage,
    ShowMapTrakingPage,
    AddVanPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    HomeDriverPage,
    HomePassengerPage,
    TrackingPassengerPage,
    FuntionPassengerPage,
    ShowRoutePage,
    ShowMapPage,
    ShowRouteTrakingPage,
    ShowDriverPage,
    ShowMapTrakingPage,
    AddVanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,Device,Network,Dialogs
  ]
})
export class AppModule {}
