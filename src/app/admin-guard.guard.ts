import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Cookies from 'js-cookie';
@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(
    private router:Router){}
    canActivate(){
      let role = Cookies.get('role');
      console.log("role",role);
      if(role =='admin')
      return true;
      else{
      this.router.navigate(['/loginAdmin']);
      return false;
      }
      }
  
}
