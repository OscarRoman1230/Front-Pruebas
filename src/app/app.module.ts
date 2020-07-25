import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { ListComponent } from './components/crud/list/list.component';
import { ListDisableComponent } from './components/crud/list-disable/list-disable.component';
import { SignupComponent } from './components/auth/signup/signup.component';

import { AuthGuard } from './guards/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    SigninComponent,
    ListComponent,
    ListDisableComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
