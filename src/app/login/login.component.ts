import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private apiService: ApiService, private router: Router) {}
  loginData = {
    email: '',
    password: ''
  };

  login() {
    const loginEndpoint = 'http://127.0.0.1:2500/login';
    const getUserEndpoint = 'http://127.0.0.1:2500/users';


    this.apiService.login(this.loginData).subscribe(
      response => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('user_id', response.id);

        this.apiService.getUserById(response.id).subscribe(
          response2 => {
            localStorage.setItem('user_type', response2.result.type);
            this.router.navigate(['/profile']);
          },
          error2 => {
            console.error('Login failed:', error2);
          }
        );

        this.router.navigate(['/profile']);
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }
}
