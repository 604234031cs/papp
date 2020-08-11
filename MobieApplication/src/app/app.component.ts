import { AddVanPage } from './../pages/add-van/add-van';
import { ShowMapPage } from './../pages/show-map/show-map';
import { FuntionPassengerPage } from './../pages/funtion-passenger/funtion-passenger';
import { HomePassengerPage } from './../pages/home-passenger/home-passenger';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomeDriverPage } from '../pages/home-driver/home-driver';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}

