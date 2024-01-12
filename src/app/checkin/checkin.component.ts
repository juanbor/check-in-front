import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { ApiService } from '../service/api.service';
// import { MatDialog } from '@angular/material/dialog';
// import { SuccessModalComponent } from '../success-modal/success-modal.component';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent {
  checkinData = {
    ci: ''
  };

  showSuccessAlert = false
  showErrorAlert = false
  errorMessage = undefined

  constructor(private apiService: ApiService) {}

  checkIn() {
    this.apiService.registerCheckIn(this.checkinData).subscribe(
      response => {
        this.showSuccessAlert = true
        this.hideSuccessAlertAfterDelay()
        this.checkinData.ci = ""
      },
      error => {
        this.showErrorAlert = true
        this.hideErrorAlertAfterDelay()
        console.error('Check-in failed:', error);
      }
    );
  }

  updateInput(digit: number) {
    this.checkinData.ci = (+this.checkinData.ci * 10 + digit).toString();
  }

  remveLastInput() {
    this.checkinData.ci = this.checkinData.ci.slice(0, -1);
  }

  hideSuccessAlertAfterDelay() {
    setTimeout(() => {
      this.showSuccessAlert = false;
    }, 3000); 
  }

  hideErrorAlertAfterDelay() {
    setTimeout(() => {
      this.showErrorAlert = false;
      this.errorMessage = undefined;
    }, 3000); 
  }
  
}
