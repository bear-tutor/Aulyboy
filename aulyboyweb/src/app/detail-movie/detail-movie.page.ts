import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.page.html',
  styleUrls: ['./detail-movie.page.scss'],
})
export class DetailMoviePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  
  backToHome(){
    this.router.navigate(['/home']);
  }

}
