import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit{
  ResetFormEmail!:FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder,private user:UserService,private route:Router) {}

  ngOnInit(): void {
    this.ResetFormEmail=this.formBuilder.group({
      Email:['',[Validators.required,Validators.email]]
    })
  }
  OnSubmit()
  {
    this.submitted=true;
    if(this.ResetFormEmail.valid)
    {
      let reqData={
        Email:this.ResetFormEmail.value.Email
      }
      this.user.forgot(reqData).subscribe((response:any)=>
      {
        console.log(response)
        localStorage.setItem("token",response.data);
      })
    }
  }
}
