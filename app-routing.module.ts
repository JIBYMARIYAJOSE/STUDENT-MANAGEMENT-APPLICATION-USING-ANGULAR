import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AddComponent } from './add/add.component';
import { CreateOrAddComponent } from './create-or-add/create-or-add.component';
import { EditComponent } from './edit/edit.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { ListVeiwComponent } from './list-veiw/list-veiw.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RouterGuardGuard } from './router-guard.guard';
 
const routes: Routes = [{path:'index/addNew', component:AddComponent,canActivate:[RouterGuardGuard]},
 {path:'edit/:id',component:EditComponent,canActivate:[RouterGuardGuard]},
 {path:'index',component:IndexPageComponent},//only registered users can access the index page
 {path:'login',component:LoginComponent},
 {path:'registerNew',component:RegisterUserComponent},
 {path:'registerNew/login',component:LoginComponent},
 {path:'listVeiw',component:ListVeiwComponent},{path:'createOrAdd',component:CreateOrAddComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes)]
  exports: [RouterModule]
})
export class AppRoutingModule { }