import { Component } from '@angular/core';
import { ApiService, PostActivity, PostActivityPropsType } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent {
  activity: PostActivity = {
    name: ''
  }

  constructor(private apiService: ApiService, private router: Router) {}

  isNotEmpty(val: string): boolean {
    return val !== '';
  }

  isInValidState = (key: PostActivityPropsType) => {
    const val = this.activity[key]
    return this.isNotEmpty(val)
  }

  createUser = () => {
    this.apiService.postActivity(this.activity).subscribe(response => {
      this.hideSuccessAlertAfterDelay()
    }, err => {
      console.error(err)
      this.hideErrorAlertAfterDelay()
    })
  }

  showSuccessAlert = false
  showErrorAlert = false
  errorMessage = undefined

  hideSuccessAlertAfterDelay() {
    this.showSuccessAlert = true
    setTimeout(() => {
      this.showSuccessAlert = false;
      this.router.navigate(['/activities']);
    }, 3000); 
  }

  hideErrorAlertAfterDelay() {
    this.showErrorAlert = true
    setTimeout(() => {
      this.showErrorAlert = false;
      this.errorMessage = undefined;
    }, 3000); 
  }
}
