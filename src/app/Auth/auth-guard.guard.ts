import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from '../Services/Auth/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private Authguardservice:AuthguardService,private router:Router){}
  canActivate():boolean{
    if(!this.Authguardservice.getusertoken())
    {
      this.router.navigateByUrl("/Login");
    }
    return this.Authguardservice.getusertoken();
  }
  
}
