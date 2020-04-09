import { Component } from '@angular/core';
import { UistandardPage } from '../uistandard/uistandard.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;

  constructor(public router:Router) {}

  goMovie(){
    this.router.navigate(['/uistandard']);
  }


}
