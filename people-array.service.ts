import { Injectable } from '@angular/core';
//to manage people array
@Injectable({
  providedIn: 'root'
})
export class PeopleArrayService {
  people:any;
  
  constructor() { }

  getID(){
    this.people=[//1.define a array for people-with 3 static elements-list of people
      {name:'emp1',email:'abc@gmail.com',age:'30',gender:'Male'},
      {name:'emp2',email:'cde@gmail.com',age:'31',gender:'Female'},
      {name:'emp3',email:'efg@gmail.com',age:'32',gender:'Male'},
    ];
  
  return this.people;
  }




}



