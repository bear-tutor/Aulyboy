import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CloudSyncService } from '../cloud-sync.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public dataUser : User[] = [];

  constructor(public router:Router,public clound: CloudSyncService) {
    this.clound.Getuser().subscribe(data => {
      if (data != null) {
        this.dataUser = data;
        console.log(this.dataUser);
      }
    });
   }

  ngOnInit() {
  }

  goSave(){
    this.router.navigate(['/home']);
  }

}
