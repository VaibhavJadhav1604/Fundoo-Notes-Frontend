import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
registrationForm!:FormGroup;
submitted=false;
constructor(private formBuilder:FormBuilder,private user:UserService,private route:Router) {}

  ngOnInit(): void {
    this.registrationForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4)]],
      confirmpassword:['',[Validators.required,Validators.minLength(4)]]
    });
}
OnSubmit()
{
  this.submitted=true;
  if(this.registrationForm.valid)
  {
    let reqData={
      firstName:this.registrationForm.value.firstName,
      lastname:this.registrationForm.value.lastname,
      email:this.registrationForm.value.email,
      password:this.registrationForm.value.password
    }
    this.user.register(reqData).subscribe((response:any)=>
    {
      console.log("Registration SuccessFull");
      localStorage.setItem("token",response.data);
    });
  }
}
}
