import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit{

   public repos: any = [];
   public userInfo: any;
   data: any;

   constructor(private route: ActivatedRoute, private service: HomeService){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["data"]);
      this.userInfo = {
        following: this.data.following,
        followers: this.data.followers,
        login: this.data.login,
        name: this.data.name,
        avatar: this.data.avatar_url,
        bio: this.data.bio
      }
   });
   
   this.service.retrieveRepository(this.data.repos_url).subscribe((resp: any) =>{
    this.repos = [...resp];
   })

  }
}
