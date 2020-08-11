import { ShowMapPage } from './../show-map/show-map';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Enums from '../../enums/enums';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ShowRoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-route',
  templateUrl: 'show-route.html',
})
export class ShowRoutePage {
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

  showMap(routeName:string){
    // console.log(routeName);
   this.navCtrl.push(ShowMapPage,routeName);
  }
}
