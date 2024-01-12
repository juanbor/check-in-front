import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isAdminUser, isNormalUser } from './service/helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'check-in-front';
  constructor(private router: Router) {}

  showNavBar: boolean = true;

ngOnInit() {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      const path = this.router.url;
      this.showNavBar = (path !== '/check-in');
    }
  });
}
  isLoggedIn = () => !!localStorage.getItem('access_token')

  isNormalUser = () => isNormalUser()
  isAdminUser = () => isAdminUser()

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_type');
    this.router.navigate(['/login']);
  }
}
