import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  isLoggedIn:boolean=false;
  login(secCode:string):boolean{
    return this.isLoggedIn=secCode==="admin";
  }
  logout(){
    this.isLoggedIn=false;
  }
}
