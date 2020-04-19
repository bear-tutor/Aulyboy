import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CloudSyncService } from '../cloud-sync.service';


@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.page.html',
  styleUrls: ['./detail-movie.page.scss'],
})
export class DetailMoviePage implements OnInit {
public _id : string
public movie : any ={};
  constructor(public router:Router, private activatedRoute: ActivatedRoute, private clound: CloudSyncService) { 
    this._id = this.activatedRoute.snapshot.paramMap.get('_id');
    console.log(this._id);
    this.clound.getmoviesDetail(this._id).subscribe(data => {
      console.log(data);
      this.movie = data;
      console.log(this.movie);
    });
  }

  ngOnInit() {
  }
  
  backToHome(){
    this.router.navigate(['/home']);
  }

}
