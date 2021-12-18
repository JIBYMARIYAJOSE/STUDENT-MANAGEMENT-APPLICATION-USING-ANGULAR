import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
//created in order to avoid the creation of forms multiple times

@Injectable({
  providedIn: 'root'
})
export class PeopleListService {
updateInfoForm:FormGroup;
  constructor() {
    this.updateInfoForm = new FormGroup({
      'Name': new FormControl('', Validators.required),//validators.required= not empty and valid
      'Age': new FormControl('', Validators.required),
      'email':new FormControl('', [Validators.required,Validators.email]),//[] for multiple validation
      
    
     });
     
   }
}
