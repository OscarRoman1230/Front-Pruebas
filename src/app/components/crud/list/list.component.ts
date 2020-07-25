import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { AuthService } from '../../../services/auth.service';

export interface User {
  id?: number;
  email: string;
  password?: string;
  fullname: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data: any = [];
  user: User = {
    email: '',
    password: '',
    fullname: ''
  };
  userOnline: any = [];
  message = '';
  dataCharger = true;

  constructor(private userService: UsersService, private authService: AuthService) {
    this.getUsers();
    this.userOnline = authService.getCurrentUser();
  }

  ngOnInit(): void {
  }

  getUsers() {
    this.dataCharger = false;
    this.userService.getUsers().subscribe(
      res => {
        this.data = res;
        this.dataCharger = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  createUser() {
    if (this.user.email && this.user.password) {
      this.userService.createUser(this.user).subscribe(
        res => {
          console.log(res);
          this.user.email = '';
          this.user.password = '';
          this.user.fullname = '';
          this.message = '';
          this.getUsers();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.message = 'Inserta un correo y una contraseña';
    }
  }

  selectUserUpdate(user) {
    this.user.id = user.id;
    this.user.email = user.email;
    this.user.password = user.password;
    this.user.fullname = user.fullname;
  }

  updateUser() {
    if (this.user.email === this.userOnline.email) {
      this.message = 'No puedes editar el usuario que se encuentra logueado';
    } else {
      this.userService.updateUser(this.user).subscribe(
        res => {
          console.log(res);
          this.user.id = null;
          this.user.email = '';
          this.user.password = '';
          this.user.fullname = '';
          this.getUsers();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  disableUSer(email) {
    if (email !== this.userOnline.email) {
      this.userService.disableUser(email).subscribe(
        res => {
          console.log(res);
          this.message = '';
          this.getUsers();
        },
        err => {
          console.log(email);
        }
      );
    } else {
      this.message = 'No puedes inhabilitarte a ti mismo';
    }
  }

}
