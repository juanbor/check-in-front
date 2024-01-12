import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { Logger } from '../service/logger/logger';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any;
  checkinHistory: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    const userId = localStorage.getItem('user_id');

    if (userId) {
      this.apiService.getUserById(userId).subscribe(
        response => {
          Logger.getInstance().info(response)
          this.user = response.result;
        },
        error => {
          console.error('Error fetching profile data:', error);
        }
      );
  
      this.apiService.getUsersCheckIn(userId).subscribe(
        response => {
          Logger.getInstance().info(response)
          this.checkinHistory = response.result;
        },
        error => {
          console.error('Error fetching profile data:', error);
        }
      );
    }
    
  }
}
