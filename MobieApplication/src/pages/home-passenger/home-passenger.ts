import { FuntionPassengerPage } from './../funtion-passenger/funtion-passenger';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import * as Enums from '../../enums/enums';
import 'rxjs/add/operator/map';
import { TrackingPassengerPage } from '../tracking-passenger/tracking-passenger';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the HomePassengerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-passenger',
  templateUrl: 'home-passenger.html',
})
export class HomePassengerPage {
  getAccount:any=[]
  updateResult:any={};
  username;
  name:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,private storage:Storage) {
    // this.updateResult.firstname ="";
    // this.updateResult.lastname ="";
    // this.regisResult.email ="";
    // this.regisResult.userid ="";
    // this.regisResult.password ="";
    // this.username = this.navParams.data;
  }

  ionViewDidLoad() {
    // let url = Enums.APIURL.URL+'/showpassenger.php';
    // let datapassenger = JSON.stringify({
    //       username:this.username
    // });
    // this.http.post(url,datapassenger).map(res=>res.json()).subscribe((data:any)=>{
    //   console.log(data);
    //   // this.getAccount = data;
    //   // this.updateResult.firstname = data[0]['p_name'];
    //   // this.updateResult.lastname = data[0]['p_lastname'];
    //   // this.updateResult.email = data[0]['p_email'];
    //   // this.updateResult.password = data[0]['p_password'];
    // });

    // console.log(this.username);
  }

  ionViewWillEnter() {
    this.storage.ready().then(() => {
    //get a key/value pair from about page
    //get ค่าข้อมลู key ชืÉอว่า phone
    this.storage.get('name').then((val) => {
      this.name = val; //ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพืÉอนําไปแสดงผลทีÉ views
      })
    });
    }



  goBlack(){
    this.navCtrl.pop();
  }

  updateAccount(){
    console.log(this.updateResult.firstname);

  }
}
