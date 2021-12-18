import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { CookieService } from 'ngx-cookie-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { IndexPageComponent } from './index-page/index-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieServiceService } from './cookie-service.service';
import { MaterialModule } from './material/material.module';
import { PeopleListService } from './shared/peopleList/people-list.service';
import { PeopleArrayService } from './people-array.service';
import { DialogServiceService } from './dialog-service.service';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthService } from './auth-service.service';
import { LoginService } from './login.service';
import { CreateOrAddComponent } from './create-or-add/create-or-add.component';
//import { ListComponentComponent } from './list-component/list-component.component';
import { ListVeiwComponent } from './list-veiw/list-veiw.component';
//import { MatConfirmDialogueComponent } from './mat-confirm-dialogue/mat-confirm-dialogue.component';
//import { AlertModule } from './_alert';
//import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    IndexPageComponent,
    LoginComponent,
    RegisterUserComponent,
    CreateOrAddComponent,
   // ListComponentComponent,
    ListVeiwComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,CommonModule,
    FormsModule,ReactiveFormsModule,
    MaterialModule
    
  ],
  providers: [CookieService,CookieServiceService,PeopleListService,PeopleArrayService,DialogServiceService,AuthService,LoginService],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
