import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
//import { FormGroup }   from '@angular/forms';
//mport { FormControl } from '@angular/forms';
import { EventEmitter,Input } from '@angular/core';


@Component({
  selector: 'app-emp-manage',
  templateUrl: './emp-manage.component.html',
    styleUrls: ['./emp-manage.component.css']
})

export class EmpManageComponent implements OnInit {
  newEmployeeClicked = false;//a variable declared for future use
  employees = [//array with some objects
    {name:'emp1', Position:'tester'},
    {name:'emp2', Position:'developer'},
    {name:'emp3', Position:'tester'}
  ];
  color:any;//color variable of any type
  constructor() { }
  
  //@ViewChild('signupForm') sgnForm: NgForm;
  
  // addNewEmployeeForm: FormGroup;
  
  // ngOnInit(): void { 
  //   this.addNewEmployeeForm = new FormGroup({
  //     'Name': new FormControl(null),
  //     'position': new FormControl(null),
  //     //'projectStatus': new FormControl('critical')
   
  //    })
   
  //}
  ngOnInit(): void{

  }
  


  model:any={};
  model2:any={};
  newEntry: any;//variable declaration
  addEmployee(){
   
    // this.model.name="";//get the name input from user
    // this.model.position="";//get the position input from user
    
    // this.employees.push(this.model);//push-- add new row to the exiting table.
    // this.model={}
   // console.log(this.model);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.employees.push(this.model,this.model.positionN);
    this.employees[this.employees.length].name =this.model.name;
    this.employees[this.employees.length].Position=this.model.position;
    this.model={}
    
    //@Input() newValue = new EventEmitter<string>();
    //this.employees= this.model.name;
  }
  onSubmit(){

  }
  
  deleteEmployee(i:any){
   this.employees.splice(i);
   console.log(i);
  }
  myValue:any;
  editEmployee(editEmployeeInfo:any){//editEmployeeInfo--parameter is the index of the row
    this.model2.name=this.employees[editEmployeeInfo].name;//moves the value of the selected row-name to update name-row
    this.model2.position=this.employees[editEmployeeInfo].Position;//position of the selected visible in this form
    this.myValue = editEmployeeInfo;
  }

  updateEmployee(){//to save the content
    let editEmployeeInfo = this.myValue;
    for(let i=0;i<this.employees.length;i++){
      if(i==editEmployeeInfo){//parese through the new values and replace the selected row
        this.employees[i].name =this.model2.name;
        this.employees[i].Position=this.model2.position;
        this.model2={}
      }//end of if
    }//end of for
  }//end of function

  addNewEmployeeBtn(){//to display the dynamic form
   this.newEmployeeClicked  = !this.newEmployeeClicked;//given in ng for to set the visibity
  }
  changeColorOne(){
    this.color=!this.color;
    if(this.color){
      return '#ffffff';
    }
    else{
      return '#f6f6f6';
    }
  }

}
