import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  url:string = "https://api.github.com/users";

  constructor(private httpClient:HttpClient) {}

  retrieveByName(nick: string){
    return this.httpClient.get(`${this.url}/${nick}`);
  }
}
