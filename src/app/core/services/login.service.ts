import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged!: boolean;

  isAuthorized(): boolean{
    //return false;
    return this.isLogged;
  }
}
