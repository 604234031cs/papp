import { LoginPage } from './../login/login';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import * as Enums from '../../enums/enums';
import 'rxjs/add/operator/map';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  regisResult:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl:AlertController,
    public loadingCtrl: LoadingController) {
    this.regisResult.firstname ="";
    this.regisResult.lastname ="";
    this.regisResult.email ="";
    this.regisResult.userid ="";
    this.regisResult.password ="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');

  }

  Register(){
    let error;
    if(this.regisResult.firstname !="" && this.regisResult.lastname !="" && this.regisResult.email!="" && this.regisResult.userid!="" && this.regisResult.password!=""){
      // console.log("firstname",this.regisResult.firstname);
      // console.log("lastname",this.regisResult.lastname);
      // console.log("email",this.regisResult.email);
      // console.log("iduser",this.regisResult.userid);
      // console.log("password",this.regisResult.password);
      let url = Enums.APIURL.URL+'/checkregister.php';
      let url2 = Enums.APIURL.URL+'/register.php';

      let datapost = JSON.stringify({
        fname: this.regisResult.firstname,
        lname: this.regisResult.lastname,
        email: this.regisResult.email,
        username: this.regisResult.userid,
        password: this.regisResult.password
      });

      this.http.post(url,datapost).map(res=>res.json()).subscribe((err:any)=>{
          if(err=="Fail"){
            let alert = this.alertCtrl.create({
              message: 'Id User นี้มีผู้ใช้งานแล้ว',
              buttons: [
                {
                  text: 'OK',
                  role: 'OK',
                }
              ]
            });
            alert.present();
          }else{
            let alert = this.alertCtrl.create({
              message: 'ยืนยันการสมัคร',
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    this.http.post(url2,datapost)
                    .subscribe(data=>{
                    //  console.log(data);
                    const loader = this.loadingCtrl.create({
                      content: "กำลังดำเนินการ",
                      duration: 500,
                    });
                    loader.present();
                     this.navCtrl.push(LoginPage);
                    });
                  }
                },
                {
                  text: 'Cancle',
                  handler: () => {
                    console.log('Disagree clicked');
                  }
                }

              ]
            });
            alert.present();
          }
      });
         // console.log(data);
    }

  }

}//end
