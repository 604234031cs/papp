import { LoginPage } from './../login/login';
import { AddVanPage } from './../add-van/add-van';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Refresher } from 'ionic-angular';
import * as Enums from '../../enums/enums';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import { Device } from '@ionic-native/device';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the HomeDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-driver',
  templateUrl: 'home-driver.html',
})
export class HomeDriverPage {

  statusDriver:boolean;
  statusvalue;
  myLat=0;
  myLng=0;
  showpositionData:any=[];
  driverdata:any
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:Http,private geolocation: Geolocation,private device: Device,private storage: Storage) {
    // this.getPostion();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeDriverPage');
    // console.log(this.driverdata['d_id']);
    this.storage.get('list').then((value) => {

      if(value!=null){
        let url = Enums.APIURL.URL+'/checkcar.php';
        let getdriver = JSON.stringify({
              did:value['d_id']
        });
        this.http.post(url,getdriver).map(res=>res.json()).subscribe((data:any)=>{
          if(data == 'null'){
            console.log(data);
              this.navCtrl.setRoot(AddVanPage,value);
          }else if(data !=null){
            console.log(data);
            console.log('มีข้อมูล');
          }
          // this.getAccount = data;
        });
      }else{

      }
      })


}


checkdriver(){

}
logout(){
  this.storage.remove('list');
  this.navCtrl.push(LoginPage);
}



//   getPostion(){
//     this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
//       this.myLat = resp.coords.latitude
//       this.myLng = resp.coords.longitude
//       console.log("ตำแหน่งแรก"+this.myLat,this.myLng);
//     }).catch((error) => {
//       console.log('Error getting location', error);
//     });
//     let watch = this.geolocation.watchPosition();
//     watch.subscribe((data) => {
//       this.updateGeolocation(data.coords.latitude,data.coords.longitude,this.Iddriver,this.device.uuid)
//     //  console.log("ตำแหน่งสอง"+this.myLat,this.myLng);
//   });
//   }

//   updateGeolocation(lat,lng,iddriver,uuid){
//     let url = Enums.APIURL.URL+'/PostionUpdate.php';
//     let postion = JSON.stringify({
//           Lat: lat,
//           Lng: lng,
//           Iddriver: iddriver,
//           uuid: uuid
//         });
//         this.http.post(url,postion).map(res=>res.json())
//           .subscribe((data: any) => {
//               console.log(data);
//               this.showpositionData = data;
//           });
//   }

//   change(){
//     if(this.statusDriver==false){
//       this.statusvalue="0";
//       console.log(this.statusvalue);
//       let url = Enums.APIURL.URL+'/UpdateStatus.php';
//       let datapost = JSON.stringify({
//         status:this.statusvalue,
//         iddriver:this.Iddriver
//       });
//       this.http.post(url,datapost).map(res=>res.json()).subscribe((data:any)=>{
//         console.log(data);
//       });

//     }else{
//       this.statusvalue="1";
//       let url = Enums.APIURL.URL+'/UpdateStatus.php';
//       let datapost = JSON.stringify({
//         status:this.statusvalue,
//         iddriver:this.Iddriver
//             });
//       this.http.post(url,datapost).map(res=>res.json()).subscribe((data:any)=>{
//         console.log(data);
//       });
//       console.log(this.statusvalue);
//     }

// }

// doRefresh() {
//   setInterval(()=>{
//       this.getPostion();

//   },2000);


// }


}//end

