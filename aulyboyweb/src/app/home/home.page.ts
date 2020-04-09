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

  ngOnInit() {
  }

  editProfile(){
    this.router.navigate(['/profile']);
  }
  goDetailPage(){
    this.router.navigate(['/detail-movie']);
  }
}
