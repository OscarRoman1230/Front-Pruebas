import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {isNullOrUndefined} from "util";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authUser(username, pass) {
    return this.http.post(`${environment.URL_API}/api/auth/signin`, {
      email: username,
      password: pass
    });
  }

  logout() {
    localStorage.removeItem('userLoggeding');
    localStorage.removeItem('token');
  }

  setUserLoggedIn(user) {
    localStorage.setItem('userLoggeding', JSON.stringify(user.user));
    localStorage.setItem('token', user.token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentUser() {
    // tslint:disable-next-line:variable-name
    const user_string = localStorage.getItem('userLoggeding');
    if (!isNullOrUndefined(user_string)) {
      return JSON.parse(user_string);
    } else {
      return null;
    }
  }
}
