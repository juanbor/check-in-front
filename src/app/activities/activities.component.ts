import { Component } from '@angular/core';
import { ActivityItem, ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  activities: ActivityItem[] = []

  constructor(private apiService: ApiService, private router: Router) {}
  
  ngOnInit() {
    this.apiService.getActivities().subscribe(
      response => {
        console.log(response)
        this.activities = response.result;
      },
      error => {
        console.error('Error fetching profile data:', error);
      }
    );
  }

  goToNewActivityPage = () => {
    this.router.navigate(['/activities/new'])
  }

  deleteActivity = (userId: string) => {
    // this.apiService.deleteActivity(userId).subscribe(res => {
    //   window.location.reload();
    // }, err => {
    //   console.error(err)
    // })
  }
}
