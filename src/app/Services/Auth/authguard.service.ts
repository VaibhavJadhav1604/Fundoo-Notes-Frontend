import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }
  getusertoken(){
    return !!localStorage.getItem("token");
  }
}
