import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DbComponent } from './Components/db/db.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'ForgotPassword',component:ForgotPasswordComponent},
  {path:'ResetPassword/:token',component:ResetPasswordComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'db',component:DbComponent},
  {path:'createnote',component:CreateNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
