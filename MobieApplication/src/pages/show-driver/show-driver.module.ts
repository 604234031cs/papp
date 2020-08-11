import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowDriverPage } from './show-driver';

@NgModule({
  declarations: [
    ShowDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowDriverPage),
  ],
})
export class ShowDriverPageModule {}
