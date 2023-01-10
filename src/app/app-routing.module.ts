import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DemoComponent } from './Components/demo/demo.component';
import { AuthGuardGuard } from './Auth/auth-guard.guard';
import { NotesComponent } from './Components/notes/notes.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';
import { DemologinComponent } from './Component/demologin/demologin.component';
import { TrashnotesComponent } from './Components/trashnotes/trashnotes.component';
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';

const routes: Routes = [
  { path: '', redirectTo: "/Login", pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'demologin', component: DemologinComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'ForgotPassword', component: ForgotPasswordComponent },
  { path: 'ResetPassword/:token', component: ResetPasswordComponent },
  { path: 'Display', component: DisplaynotesComponent },
  {
    path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuardGuard],
    children: [
      { path: 'notes', component: NotesComponent },
      { path: 'trash', component: TrashnotesComponent },
      { path: 'archive', component: ArchivenotesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
