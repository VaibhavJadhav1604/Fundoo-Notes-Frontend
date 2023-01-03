import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  ResetForm!: FormGroup;
  submitted = false;
  token: any;
  constructor(private formBuilder: FormBuilder, private user: UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ResetForm = this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(4)]]
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  OnSubmit() {
    this.submitted = true;
    if (this.ResetForm.valid) {
      let reqData = {
        Password: this.ResetForm.value.Password,
        ConfirmPassword: this.ResetForm.value.ConfirmPassword
      }
      console.log(reqData);
      this.user.reset(reqData, this.token).subscribe((response: any) => {
        console.log("Password Changed Successfully");
        console.log(response);
      });
    }
  }
}
