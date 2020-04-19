import { Component } from '@angular/core';
import { UistandardPage } from '../uistandard/uistandard.page';
import { Router } from '@angular/router';
import { CloudSyncService } from '../cloud-sync.service';
import { HttpClient } from '@angular/common/http';
import { MovieDetail } from 'src/models/moviedetail';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;

  public result : MovieDetail[] = [];

  constructor(public router: Router, public cloud: CloudSyncService) {
    this.cloud.moviesDetail().subscribe(data => {
      if (data != null) {
        this.result = data
        console.log(this.result);
      }
    });

  }

  ngOnInit() {
  }

  editProfile() {
    this.router.navigate(['/profile']);
  }
  goDetailPage(_id : string) {
    this.router.navigate(['/detail-movie',_id]);
  }
}
