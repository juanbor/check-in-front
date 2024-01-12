import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check if the access_token is present in the local storage
    const accessToken = localStorage.getItem('access_token');
    const userType = localStorage.getItem('user_type');
    const path = next.url[0].path;
    const admin = ['users']

    if (accessToken) {
      
      if (admin.includes(path) && userType !== 'ADMIN') {
        this.router.navigate(['/profile']);
        return false;
      } 
      
      return true;
    } else {
      // If not present, redirect to the login page (or any other page)
      this.router.navigate(['/login']); // Adjust the route as needed
      return false;
    }
  }
}
