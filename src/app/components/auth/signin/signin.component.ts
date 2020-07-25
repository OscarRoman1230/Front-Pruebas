import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ListComponent } from '../../crud/list/list.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = '';
  password = '';
  message = '';
  data: any = [];

  constructor(private authService: AuthService, private router: Router) {
    if (authService.loggedIn()) {
      this.router.navigateByUrl('/list-users');
    } else {
      authService.logout();
    }
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.authUser(this.email, this.password).subscribe(
      res => {
        this.data = res;
        if (this.data.status === 1) {
          this.authService.setUserLoggedIn(res);
          // this.router.navigateByUrl('/list-users', { skipLocationChange: true }).then(() => {
          //   this.router.navigate(['/list-users']);
          // });
          this.router.navigate(['list-users']);
        } else {
          this.message = this.data.message;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
