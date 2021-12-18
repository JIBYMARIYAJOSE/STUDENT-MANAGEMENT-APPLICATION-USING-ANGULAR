import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginForm:FormGroup;
  constructor() {
    this.loginForm= new FormGroup({
      'userName': new FormControl('', Validators.required),//validators.required= not empty and valid
      'password': new FormControl('', Validators.required),
      
   });
     
}
}