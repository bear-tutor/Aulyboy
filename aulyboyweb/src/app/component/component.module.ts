import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AulyboyComponent } from './aulyboy/aulyboy.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    AulyboyComponent,
  ],
  exports: [
    AulyboyComponent,
  ],
})
export class ComponentModule { }
