import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoginService } from '../../details/details.service';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.css']
})
export class CustomPageComponent implements OnInit {
 
  color: string = '#0d60a4';
  name: string = '';
  userData: any;
  @Input() userInfo: any;
  
  colors = ['#ADD8E6','#98FF98', '#FFE4E1', '#D3D3D3', '#FFFACD',  '#0d60a4'];

  userRepos: any = [];

  constructor(private service: LoginService,private router: Router, private toastr: ToastrService, private route: ActivatedRoute, private listservice: HomeService){}

  click(){
    window.open(`https://${this.userInfo.blog}`);
  }

  onColorClick(color: string): void {
    this.color = color
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      var data = params["name"];
      if(data){
          this.name = data;
          this.onSubmit();
      }
    });
  }

  containsArrow(descricao: any){
    return descricao?.includes(":arrow_right:")
  }

  filterRepo(){
    console.log(this.userInfo.repos)
    this.listservice.retrieveRepository(this.userInfo.repos).subscribe((resp: any) =>{
      this.userRepos = [...resp].filter((item) => this.containsArrow(item.description));
     })
  }

  navigateTo(){
      let navigationExtras: NavigationExtras = {
          queryParams: {
              "name": this.userData.login,
              "back": this.colors.indexOf(this.color)
          }
        };
      this.router.navigate(["shared"],  navigationExtras);
    }

    onSubmit(){
      this.service.retrieveByName(this.name).subscribe(
          (res:any)=>{

            this.userData = res
            this.userInfo = {
              following: res.following,
              followers: res.followers,
              login: res.login,
              name: res.name,
              avatar: res.avatar_url,
              bio: res.bio,
              public_repos: res.public_repos,
              company: res.company,
              blog: res.blog,
              location: res.location,
              email: res.email,
              repos: res.repos_url
            }

            this.filterRepo();

            this.toastr.success('', 'Usuario Encontrado');
          },
          (err) =>{
            if(err.status == 404){
              this.toastr.error('', 'Usuario Não Encontrado');
            }else{
              this.toastr.error('', 'Ocorreu um error');
            }
          }
        );
    }


}
