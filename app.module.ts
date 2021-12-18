import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmpManageComponent } from './emp-manage/emp-manage.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpManageComponent
  ],
  entryComponents:[],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    //NgModule,//Need not import 
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
