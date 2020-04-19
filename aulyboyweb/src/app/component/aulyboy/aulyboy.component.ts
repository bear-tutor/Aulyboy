import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-aulyboy',
  templateUrl: './aulyboy.component.html',
  styleUrls: ['./aulyboy.component.scss'],
})
export class AulyboyComponent implements OnInit {

  constructor(private router: Route) { }

  ngOnInit() {}

  onClick(){
    // this.router.children['HomePage'];
  }
}
