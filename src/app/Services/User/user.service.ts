import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService:HttpService) {}
  login(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('/User/UserLogin',reqData,false,header)
  }

  register(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpService.postService('/User/UserRegister',reqData,false,header)
  }

  forgot(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpService.postService('/User/ForgotPassword?Email='+reqData.Email,{},false,header)
  }

  reset(reqData:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+token
      })
    }
    return this.httpService.postServiceReset('/User/ResetPassword?Password='+reqData.Password+'&ConfirmPassword='+reqData.ConfirmPassword,{},true,header)
  }
}
