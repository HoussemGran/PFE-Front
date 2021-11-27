import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class YourGuardGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem("login")!=null || localStorage.getItem('register')!=null) 
      {
      console.log(true);
      return true;
    }
      else {
      console.log(false) ;
      return false;
    }
  }
}

