import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';





@Injectable({
  providedIn: 'root'
})
export class CookieServiceService {
   intermediateResult:any;
   result:any;
   personData:any;
   cookieName:any;
   
   
  
   constructor(private cookies:CookieService){}
   

  
  setCookies(name:string,value:string){
    //   ////////set expiry for cookie////////////////////
    let expire = new Date();
    let time = Date.now() + ((3600 * 1000) * 2400); // current time + 100 days /// 
    expire.setTime(time);
    
    this.cookies.set(name, JSON.stringify(value),expire);//set cookie
  
   }
   

  
  getCookies(name:string){
    
   return JSON.parse(this.cookies.get(name));//get cookie
  }

  deleteCookies(name:string){
   this.cookies.delete(name);
  }
}
