import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit{
   public games: Game[] | undefined ;

   public repos: any = [];

   public userInfo: any;
   data: any;

   constructor(private route: ActivatedRoute, private service: HomeService){

   }

  ngOnInit(): void {
    this.games = [
      new Game(1, "teste 1"),
      new Game(2, "teste 2"),
      new Game(3, "teste 3"),
      new Game(4, "teste 4"),
      new Game(5, "teste 5"),
      new Game(6, "teste 6"),
      new Game(8, "teste 8"),
      new Game(9, "teste 9"),
    ];

    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["data"]);
      this.userInfo = {
        following: this.data.following,
        followers: this.data.followers,
        login: this.data.login,
        name: this.data.name,
        avatar: this.data.avatar_url
      }
   });
   

   this.service.retrieveRepository(this.data.repos_url).subscribe((resp: any) =>{
    resp.forEach((element: any) => {
      const repo = {
        name: element.name,
        description: element.description
      } 
      this.repos.push(repo)
    });
   })

  }
}
