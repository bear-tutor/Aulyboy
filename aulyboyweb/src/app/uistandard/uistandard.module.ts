import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UistandardPageRoutingModule } from './uistandard-routing.module';

import { UistandardPage } from './uistandard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UistandardPageRoutingModule
  ],
  declarations: [UistandardPage]
})
export class UistandardPageModule {}
