import { Component } from '@angular/core';
import { ApiService, PostUser, PostUserPropsType } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  user: PostUser = {
    email: '',
    first_name: '',
    last_name: '',
    ci: '',
    password: '',
    type: 'NORMAL'
  }

  constructor(private apiService: ApiService, private router: Router) {}

  isNotEmpty(val: string): boolean {
    return val !== '';
  }

  isInValidState = (key: PostUserPropsType) => {
    const val = this.user[key]
    return this.isNotEmpty(val)
  }

  createUser = () => {
    this.apiService.postUser(this.user).subscribe(response => {
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
      this.router.navigate(['/users']);
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
