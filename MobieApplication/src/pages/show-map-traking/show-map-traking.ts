import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Refresher } from 'ionic-angular';
import * as Enums from '../../enums/enums';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the ShowMapTrakingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-map-traking',
  templateUrl: 'show-map-traking.html',
})
export class ShowMapTrakingPage {
  get_id_driver:any;
  position_driver:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,private geolocation: Geolocation) {
      this.get_id_driver = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowMapTrakingPage');
    console.log(this.get_id_driver);

  }

  getPostionDriver(){
    let url = Enums.APIURL.URL+'/showPostionDriver.php';
    let datapost = JSON.stringify({
        driverid: this.get_id_driver
    });
    this.http.post(url,datapost).map(res=>res.json()).subscribe((position:any)=>{
        console.log(position);
      this.position_driver = position;
    });
  }
  
  doRefresh(refresher:Refresher) {
        setTimeout(()=>{
            this.getPostionDriver();
            refresher.complete();
        },2000);
  }



}
