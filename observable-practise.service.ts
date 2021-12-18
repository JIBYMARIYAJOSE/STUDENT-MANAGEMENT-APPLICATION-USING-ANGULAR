import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { CookieServiceService } from './cookie-service.service';
import { PeopleListService } from './shared/peopleList/people-list.service';
@Injectable({
  providedIn: 'root'
})
///Observables-used to communicate between components.That cannot be related as parent-child
//Define a variable as subject here in the service
//Define two function-one to define a variable and the other to return the variable as observable
//Return a variable as a observable
//Now select a receiver(listVeiw) component[Here this must subcribe to the observable] and sender(Here create-editcomponent) component
export class ObservablePractiseService {
  latestInfoStored:any;
  cookieData:any;

 constructor(private cookies:CookieServiceService,private formService:PeopleListService){}
  private subject = new Subject<any>();
  private editIndex = new Subject<any>();
  private deleteIndex = new Subject<any>();
  setValue(form:any){
    //  this.latestInfoStored= localStorage.getItem("NewList");//value from local storage accessed to get the latest status of the data
    //  this.cookieData=JSON.parse(this.cookieData);
    //  this.subject.next(this.latestInfoStored);//variable observed
     /////////////exec........(2)
   this.subject.next(this.formService.updateInfoForm.value);//a change in form observed

  }
  seteditIndex(i:any){
   
     /////////////exec........(2)
   this.subject.next(i);//a change in form observed

  }
  setdeleteIndex(i:any){
   
     /////////////exec........(2)
   this.subject.next(i);//a change in form observed

  }
  geteditIndex(): Observable<any>{
   
     /////////////exec........(2)
    return this.editIndex.asObservable();

  }
  getdeleteIndex(): Observable<any>{
   
     /////////////exec........(2)
    return this.deleteIndex.asObservable();

  }
  getValue(): Observable<any> {
        return this.subject.asObservable();
    }

  // sendMessage(message: string) {
  //     this.subject.next({ text: message });
  // }

  // clearMessages() {
  //     this.subject.next();
  // }

  // getMessage(): Observable<any> {
  //     return this.subject.asObservable();
  // }
}
