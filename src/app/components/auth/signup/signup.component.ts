import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

export interface User {
  email: string;
  password?: string;
  fullname: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = {
    email: '',
    password: '',
    fullname: ''
  };
  message = '';
  data: any = [];

  constructor(
    private userService: UsersService,
    private router: Router,
    private authService: AuthService
  ) {
    if (authService.loggedIn()) {
      this.router.navigateByUrl('/list-users');
    }
  }

  ngOnInit(): void {
  }

  createUser() {
    if (this.user.email && this.user.password) {
      this.userService.createUser(this.user).subscribe(
        res => {
          console.log(res);
          this.data = res;
          if (this.data.status === 1) {
            this.user.email = '';
            this.user.password = '';
            this.user.fullname = '';
            this.router.navigate(['sign-in']);
          }
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.message = 'Inserta un correo y una contraseña';
    }
  }

}
