import { Component, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

    name: string = '';

    constructor(private service: LoginService,private router: Router, private toastr: ToastrService){}

    onSubmit(){
      this.service.retrieveByName(this.name).subscribe(
          (res:any)=>{
            var resp = res;
            this.toastr.success('', 'Usuario Encontrado');
            let navigationExtras: NavigationExtras = {
              queryParams: {
                  "data": JSON.stringify(resp)
              }
            };
            this.router.navigate(["home"],  navigationExtras);
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
