import { FuntionPassengerPage } from './../funtion-passenger/funtion-passenger';
import { HomePage } from './../home/home';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import * as Enums from '../../enums/enums';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { Dialogs } from '@ionic-native/dialogs';
import { Http, HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HomeDriverPage } from '../home-driver/home-driver';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  inputlogin:any = {};
  username:any;
  type;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl:AlertController,private network: Network,private dialogs: Dialogs,
    public loadingCtrl: LoadingController,private storage: Storage ) {
    // this.inputlogin.username ="";
    // this.inputlogin.password=""

    this.network.onDisconnect().subscribe(() => {
      this.dialogs.alert('network was disconnected :-(');
    });

    this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      // We just got a connection but we need to wait briefly
       // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        this.dialogs.alert('we got a '+ this.network.type + 'connection, woohoo!')
        .then(() => console.log('Dialog dismissed'))
        .catch(e => console.log('Error displaying dialog', e));
      }, 3000);
    });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  ionViewWillEnter (){

    //   set a key/value
    //  กาํ หนด และ set ค่า key เป็น phone และค่า value เป็น 085 4952624
    //   เราสามารถเรียกใช้ค่านีได้จากทุกๆเพจ โดยอ้างชื Ê Éอ key นัÉนก็คอื phone
      this.storage.get('list').then((val) => {

        if(val!=null){
            if(val['u_type']==="passenger"){
          this.navCtrl.setRoot(FuntionPassengerPage);
        }else if(val['u_type']==="driver"){
          this.navCtrl.setRoot(HomeDriverPage);
        }
      }

        })



  }


  register(){
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500,
    });
    loader.present();
    this.navCtrl.push(RegisterPage);
    // this.navCtrl.setRoot(RegisterPage);
  }

  login(){
    if(this.inputlogin.username !="" && this.inputlogin.password !=""){
      // console.log("username", this.inputlogin.username);
      // console.log("password",this.inputlogin.password);
      let url = Enums.APIURL.URL+'/checklogin.php';
      let datapost = JSON.stringify({
        username: this.inputlogin.username,
        password: this.inputlogin.password
      });

      this.http.post(url,datapost).map(res=>res.json()).subscribe((data:any={})=>{
          if(data!="NULL"){
              // console.log(data['ustatus']);
              if(data['u_type'] == "driver"){
                const loader = this.loadingCtrl.create({
                  content: "Please wait...",
                  duration: 500,
                });
                loader.present();

                this.storage.ready().then(() => { //ถ้า platform พร้อมใช้งาน
                  this.storage.set('list', data)
                  });
                this.navCtrl.setRoot(HomeDriverPage);

              }else if(data['u_type'] == "passenger"){
                const loader = this.loadingCtrl.create({
                  content: "Please wait...",
                  duration: 500,
                });
                loader.present();
                // console.log(data);
                this.storage.ready().then(() => { //ถ้า platform พร้อมใช้งาน
                  this.storage.set('list', data)
                  });
                this.navCtrl.setRoot(FuntionPassengerPage);
              }
          }else{
            let alert = this.alertCtrl.create({
              message: 'Username หรือ Password ไม่ถูกต้อง',
              buttons: [
                {
                  cssClass:'secondary',
                  text: 'OK',
                  role: 'OK',
                }
              ]
            });
            alert.present();
            this.inputlogin.username ="";
            this.inputlogin.password="";
          }
      });
    }else{
      let alert = this.alertCtrl.create({
        message: 'กรุณาใส่ Username และ Password',
        buttons: [
          {
            text: 'OK',
            role: 'OK',
            cssClass:'secondary'
          }
        ]
      });
      alert.present();
    }
  }
}
