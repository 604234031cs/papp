import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePassengerPage } from './home-passenger';

@NgModule({
  declarations: [
    HomePassengerPage,
  ],
  imports: [
    IonicPageModule.forChild(HomePassengerPage),
  ],
})
export class HomePassengerPageModule {}
