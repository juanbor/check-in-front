import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API = 'http://localhost:2500'
  
  constructor(private http: HttpClient) { }

  buildHeaders = () => {
    const accessToken = localStorage.getItem('access_token');
    return new HttpHeaders().set('access_token', `${accessToken}`)
  }

  getUsers = () => {
    return this.http.get<GetMulResult<UserItem>>(`${this.API}/${PATHS.USERS_PATH}`, { headers: this.buildHeaders() })
  }

  postUser = (userData: PostUser) => {
    return this.http.post<any>(`${this.API}/${PATHS.USERS_PATH}`, userData, { headers: this.buildHeaders() })
  }

  postActivity = (activityData: PostActivity) => {
    return this.http.post<any>(`${this.API}/${PATHS.ACTIVITY_PATH}`, activityData, { headers: this.buildHeaders() })
  }

  getUserById = (userId: string) => {
    return this.http.get<GetResult<UserItem>>(`${this.API}/${PATHS.USERS_PATH}?user_id=${userId}`, { headers: this.buildHeaders() })
  }

  getActivities = () => {
    return this.http.get<GetMulResult<ActivityItem>>(`${this.API}/${PATHS.ACTIVITY_PATH}`, { headers: this.buildHeaders() })
  }

  login = (loginData: PostLogin) => {
    return this.http.post<PostLoginResponse>(`${this.API}/${PATHS.LOGIN_PATH}`, loginData)
  }

  registerCheckIn = (checkInData: PostCheckIn) => {
    return this.http.post<any>(`${this.API}/${PATHS.POST_CHECK_IN}`, checkInData, { headers: this.buildHeaders() })
  }

  getUsersCheckIn = (userId: string) => {
    return this.http.get<GetCheckInResult>(`${this.API}/${PATHS.GET_USERS_CHECK_IN}?user_id=${userId}`, { headers: this.buildHeaders() })
  }

  deleteUser = (userId: string) => {
    return this.http.delete<any>(`${this.API}/${PATHS.USERS_PATH}/${userId}`, { headers: this.buildHeaders() })
  }
}

export interface ActivityItem {
  activity_id: string,
  name: string
}

export interface PostActivity {
  name: string
}

export interface PostCheckIn {
  ci: string
}

export interface PostLogin {
  email: string,
  password: string
}

export interface PostLoginResponse {
  id: string,
  access_token: string
}

export interface UserItem {
  user_id: string,
  type: string,
  first_name: string,
  last_name: string,
  email: string,
  ci: string
}

export interface PostUser {
  type: string,
  first_name: string,
  last_name: string,
  email: string,
  ci: string,
  password: string
}

export type PostUserPropsType = keyof PostUser
export type PostActivityPropsType = keyof PostActivity

export interface CheckInItem {
  event_name: string,
  user_id: string,
  date: string
}

export interface GetCheckInResult {
  result: CheckInItem[]
}

export interface GetResult<K> {
  result: K
}

export interface GetMulResult<K> {
  result: K[]
}

export const PATHS = {
  USERS_PATH: 'users',
  POST_CHECK_IN: 'users/check-in',
  LOGIN_PATH: 'login',
  GET_USERS_CHECK_IN: 'users/check-in',
  ACTIVITY_PATH: 'activities'
}