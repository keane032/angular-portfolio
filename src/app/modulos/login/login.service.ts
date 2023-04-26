import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = "https://api.github.com/users";

  constructor(private httpClient:HttpClient) {}

  retrieveByName(nick: string){
    return this.httpClient.get(`${this.url}/${nick}`);
  }
}
