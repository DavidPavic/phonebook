import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {};

  canActivate() {
    if(this.loginService.isAuthorized()) {
      console.log("pass");
      //this.router.navigate(['/table']);
      return true;
    }
    else {
      console.log("fail");
      this.router.navigate(['/form']);
      return false;
    }
  }
  
}
