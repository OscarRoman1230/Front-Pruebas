import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-list-disable',
  templateUrl: './list-disable.component.html',
  styleUrls: ['./list-disable.component.css']
})
export class ListDisableComponent implements OnInit {

  message = '';
  usersDisable: any = [];
  dataCharger = true;

  constructor(
    private userService: UsersService
  ) {
    this.getUsersDisable();
  }

  ngOnInit(): void {
  }

  getUsersDisable() {
    this.dataCharger = false;
    this.userService.getUsersDisable().subscribe(
      res => {
        this.usersDisable = res;
        this.dataCharger = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  enableUser(email) {
    this.userService.enableUser(email).subscribe(
      res => {
        console.log(res);
        this.message = '';
        this.getUsersDisable();
      },
      err => {
        console.log(email);
      }
    );
  }

}
