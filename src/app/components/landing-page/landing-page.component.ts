import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    if (authService.loggedIn()) {
      this.router.navigateByUrl('/list-users');
    }
  }

  ngOnInit(): void {
  }

}
