import { Http } from '@angular/http';

import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
// declare var google: any;
declare var longdo: any;
/**
 * Generated class for the ShowMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-map',
  templateUrl: 'show-map.html',
})
export class ShowMapPage {
  myLatitude = 0;
  myLongitude = 0;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  showRouteName:string;
  name:string;
  marker = new longdo.Marker({ lon: 100.643005, lat: 14.525007 });
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,
    public platform: Platform,private geolocation: Geolocation) {
    this.showRouteName = this.navParams.data;
    platform.ready().then(() => {
      // this.initMap();

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowMapPage');
    console.log(this.showRouteName);
      //get a key/value pair from about page
      //get ค่าข้อมลู key ชืÉอว่า phone
    this.initMap();
  }


  initMap() {
    // this.map = new google.maps.Map(this.mapElement.nativeElement, {
    //   zoom: 7,
    //   center: {lat: 41.85, lng: -87.65}
    // });
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.map = new longdo.Map({
        placeholder: document.getElementById('map')
      });
      this.map.location({ lon: resp.coords.longitude, lat: resp.coords.latitude }, true);
      this.dropMarker(resp.coords.longitude,resp.coords.latitude );
      this.map.zoomRange({ min:10, max:20 });
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  dropMarker(lon,lat) {
    this.marker = new longdo.Marker({lon:lon,lat:lat})
    this.map.Overlays.drop(this.marker);
 }

}//end

