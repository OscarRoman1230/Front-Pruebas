import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${environment.URL_API}/api/users`);
  }

  getUsersDisable() {
    return this.http.get(`${environment.URL_API}/api/users/disable`);
  }

  createUser(user) {
    return this.http.post(`${environment.URL_API}/api/auth/singup`, {
      email: user.email,
      password: user.password,
      fullname: user.fullname,
      estado: 'activo'
    });
  }

  updateUser(user) {
    return this.http.put(`${environment.URL_API}/api/users/update`, {
      id: user.id,
      email: user.email,
      fullname: user.fullname,
      estado: 'activo'
    });
  }

  disableUser(data) {
    return this.http.put(`${environment.URL_API}/api/users/disable/${data}`, {
      estado: 'inactivo'
    });
  }

  enableUser(data) {
    return this.http.put(`${environment.URL_API}/api/users/enable/${data}`, {
      estado: 'activo'
    });
  }
}
