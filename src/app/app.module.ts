import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckinComponent } from './checkin/checkin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth/auth.guard';
import { NewUserComponent } from './new-user/new-user.component';
import { NewActivityComponent } from './new-activity/new-activity.component';
import { ActivitiesComponent } from './activities/activities.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    CheckinComponent,
    SuccessModalComponent,
    CustomModalComponent,
    UsersComponent,
    NewUserComponent,
    NewActivityComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
