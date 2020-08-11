import { ShowMapTrakingPage } from './../show-map-traking/show-map-traking';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform,Refresher,ToastController } from 'ionic-angular';
import * as Enums from '../../enums/enums';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ShowDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-driver',
  templateUrl: 'show-driver.html',
})
export class ShowDriverPage {
  showRouteName:string;
  showRouteId:string;

  statusdriveron:any=[];
  statusdriveroff:any=[];
  driver: string = "Online";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,platform:Platform,public http:Http,public toastCtrl: ToastController) {
    this.showRouteId = this.navParams.get('idRoute');
    this.isAndroid = platform.is('android');
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ShowMapPage');
    // console.log(this.showRouteName);
    // console.log(this.showRouteId);
    this.showDriverStatus();
  }

  ionViewDidLeave() {

  }

  showDriverStatus(){
    let url = Enums.APIURL.URL+'/showstatusdriver.php';
    let datapost = JSON.stringify({
      idRoute:this.showRouteId
    });
    this.http.post(url,datapost).map(res=>res.json()).subscribe((data:any)=>{
      console.log(data['offline']);
      console.log(data['online']);
      this.statusdriveron = data['online'];
      this.statusdriveroff = data['offline'];

    });
  }
  doRefresh(refresher:Refresher) {
    setTimeout(() => {
      this.showDriverStatus();
      refresher.complete();
      let toast = this.toastCtrl.create({
        message: 'แสดงรายการอัพเดทล่าสุดเรียบร้อยแล้ว.',
        duration: 2000
      });
      toast.present();
    }, 5000);
  }

  goBack(){
    this.navCtrl.pop();
  }

  showMapTraking(did:string){
      this.navCtrl.push(ShowMapTrakingPage,did);
  }

}
