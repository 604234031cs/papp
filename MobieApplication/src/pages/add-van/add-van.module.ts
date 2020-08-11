import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddVanPage } from './add-van';

@NgModule({
  declarations: [
    AddVanPage,
  ],
  imports: [
    IonicPageModule.forChild(AddVanPage),
  ],
})
export class AddVanPageModule {}
