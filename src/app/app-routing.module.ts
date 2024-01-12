import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckinComponent } from './checkin/checkin.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth/auth.guard';
import { NewUserComponent } from './new-user/new-user.component';
import { ActivitiesComponent } from './activities/activities.component';
import { NewActivityComponent } from './new-activity/new-activity.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'check-in', component: CheckinComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'users/new', component: NewUserComponent, canActivate: [AuthGuard] },
  { path: 'activities', component: ActivitiesComponent, canActivate: [AuthGuard] },
  { path: 'activities/new', component: NewActivityComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
