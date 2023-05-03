import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit{

    name: string = '';
    userData: any;
    @Input() userInfo: any;

    constructor(private service: LoginService,private router: Router, private toastr: ToastrService, private route: ActivatedRoute){}
  
  click(){

    console.log();
    window.open(`https://${this.userInfo.blog}`);
     
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

  navigateTo(){
      let navigationExtras: NavigationExtras = {
          queryParams: {
              "data": JSON.stringify(this.userData)
          }
        };
      this.router.navigate(["home"],  navigationExtras);
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
            }

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
