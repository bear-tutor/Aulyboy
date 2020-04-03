import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uistandard',
  templateUrl: './uistandard.page.html',
  styleUrls: ['./uistandard.page.scss'],
})
export class UistandardPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  yy(){
    this.router.navigate(['/home']);
  }

  zz(){
    this.router.navigate(['/profile']);
  }


}
