import { HomeDriverPage } from './../home-driver/home-driver';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as Enums from '../../enums/enums';
import 'rxjs/add/operator/map';
/**
 * Generated class for the AddVanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-van',
  templateUrl: 'add-van.html',
})
export class AddVanPage {
  van:any={};
  driverdata;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http:Http,public alertCtrl:AlertController) {
    this.van.license="";
    this.driverdata = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddVanPage');
    console.log(this.driverdata);
  }

  datavan(){
    if(this.van.license !=""){
      console.log(this.van.license);
      let url = Enums.APIURL.URL+'/addvandata.php';
      let datavan = JSON.stringify({
        vanlicense: this.van.license,
        dirverid: this.driverdata['d_id']
      });
      console.log(datavan);
      this.http.post(url,datavan).map(res=>res.json()).subscribe(data=>{
          if(data=="pass"){
            console.log(data);

            let alert = this.alertCtrl.create({
              message: "บันทึกสำเร็จ",
              buttons: [
                {
                  cssClass:'secondary',
                  text: 'OK',
                  role: 'OK',
                }
              ]
            });
            alert.present();
            this.navCtrl.pop();
          }else if(data =='Fail'){
            console.log("เกิดข้อผิดพลาด");
            let alert = this.alertCtrl.create({
              message: "เกิดข้อผิดพลาด",
              buttons: [
                {
                  cssClass:'danger',
                  text: 'OK',
                  role: 'OK',
                }
              ]
            });
            alert.present();
            this.van.license=""
          }
      });

    }else{
      console.log("ไม่มีข้อมูล");
    }

}
}
