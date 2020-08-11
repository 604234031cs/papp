import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackingPassengerPage } from './tracking-passenger';

@NgModule({
  declarations: [
    TrackingPassengerPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackingPassengerPage),
  ],
})
export class TrackingPassengerPageModule {}
