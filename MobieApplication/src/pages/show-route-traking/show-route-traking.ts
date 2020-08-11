import { Http } from '@angular/http';
import { ShowDriverPage } from './../show-driver/show-driver';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Enums from '../../enums/enums';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ShowRouteTrakingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-route-traking',
  templateUrl: 'show-route-traking.html',
})
export class ShowRouteTrakingPage {
  routes:any=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  ionViewDidLoad() {
    let url = Enums.APIURL.URL+'/showRoute.php';
    this.http.get(url).map(res=>res.json()).subscribe((data:any)=>{
      console.log(data);
      this.routes = data;
    });
  }

  showMap(routeId:string){
    // console.log(routeName);
   this.navCtrl.push(ShowDriverPage,{
     idRoute:routeId
   });
  }

}
