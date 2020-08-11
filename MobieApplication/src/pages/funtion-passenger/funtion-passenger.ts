import { LoginPage } from './../login/login';
import { ActionSheetController } from 'ionic-angular';
import { ShowRouteTrakingPage } from './../show-route-traking/show-route-traking';
import { ShowRoutePage } from './../show-route/show-route';
import { HomePassengerPage } from './../home-passenger/home-passenger';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the FuntionPassengerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-funtion-passenger',
  templateUrl: 'funtion-passenger.html',
})
export class FuntionPassengerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetController: ActionSheetController,private storage: Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuntionPassengerPage');

  }

// ionViewWillEnter() {
//     this.storage.ready().then(() => { //ถ้า platform พร้อมใช้งาน
//     // set a key/value
//    //กาํ หนด และ set ค่า key เป็น phone และค่า value เป็น 085 4952624
//     //เราสามารถเรียกใช้ค่านีได้จากทุกๆเพจ โดยอ้างชื Ê Éอ key นัÉนก็คอื phone
//     this.storage.set('name', this.passenger['p_name']);
//     });
//     }

  goPageroute(){
    this.navCtrl.push(ShowRoutePage)
  }

  setting(){
    const actionSheet = this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'บัญชีผู้ใช้',
        role: 'destructive',
        icon: 'md-person',
        handler: () => {
          this.navCtrl.push(HomePassengerPage);
        }
      }, {
        text: 'ออกจากระบบ',
        icon: 'md-power',
        handler: () => {
          this.storage.remove('list');
          this.navCtrl.push(LoginPage);
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    actionSheet.present();
  }


  goPagerouteTraking(){
    this.navCtrl.push(ShowRouteTrakingPage)
  }

}
