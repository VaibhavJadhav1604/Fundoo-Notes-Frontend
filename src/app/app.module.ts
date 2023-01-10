import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { DemoComponent } from './Components/demo/demo.component';
import { AuthguardService } from './Services/Auth/authguard.service';
import { NotesComponent } from './Components/notes/notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';
import { UpdatenotesComponent } from './Components/updatenotes/updatenotes.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DemologinComponent } from './Component/demologin/demologin.component';
import { TrashnotesComponent } from './Components/trashnotes/trashnotes.component';
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    DemoComponent,
    NotesComponent,
    IconsComponent,
    CreatenoteComponent,
    DisplaynotesComponent,
    UpdatenotesComponent,
    DemologinComponent,
    TrashnotesComponent,
    ArchivenotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
