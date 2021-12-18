import { Injectable } from '@angular/core';
import { CookieServiceService } from "./cookie-service.service";
import { LoginService } from "./login.service";



@Injectable({
  providedIn: 'root'
})
export class AuthService {
status:boolean=false;//stores the login status

constructor(private cookies:CookieServiceService,private loginService:LoginService) { }





public isLoggedIn(){
  if(this.cookies.getCookies('loggedinUserCookie')===false)
  // this.cookies.getCookies('loggedinUserCookie').length>0 ? true:false;
  // //if the user logged in return true else false
{
  return false;

}//end of if
return true;
}

}