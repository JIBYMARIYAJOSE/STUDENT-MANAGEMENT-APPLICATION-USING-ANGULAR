import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';
import { CookieServiceService } from './cookie-service.service';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class RouterGuardGuard implements CanActivate {

  constructor(private cookies:CookieServiceService, public login:LoginService, public authService:AuthService) { }
// inputUsername:string= this.login.loginForm.value.userName;
// inputPassword:string=this.login.loginForm.value.password;
// getCookieValue= this.cookies.getCookies('userInfo');
// cookieData=JSON.parse(this.getCookieValue);//latest value updated

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   //if somebody logged in return true else false
  //   if(this.loginService.loginForm.value.userName)
  //     return true;
  // }
  
   
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    //if somebody logged in return true else false
    // if(this.login.loginForm.value.userName===this.cookieData.name){
    //   console.log(this.login.loginForm.value.password);
    //   console.log(this.cookieData.name);
    //   return true;
    // }
    // else{
    // return false;
    // if(this.authService.isLoggedIn()===true)
    // return true;
    
     return this.authService.isLoggedIn();
     

      
  }
  
}
