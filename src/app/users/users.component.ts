import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, UserItem } from '../service/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  
  users: UserItem[] = []

  constructor(private apiService: ApiService, private router: Router) {}
  
  ngOnInit() {
    this.apiService.getUsers().subscribe(
      response => {
        console.log(response)
        this.users = response.result;
      },
      error => {
        console.error('Error fetching profile data:', error);
      }
    );
  }

  goToNewUserPage = () => {
    this.router.navigate(['/users/new'])
  }

  deleteUser = (userId: string) => {
    this.apiService.deleteUser(userId).subscribe(res => {
      window.location.reload();
    }, err => {
      console.error(err)
    })
  }
}
