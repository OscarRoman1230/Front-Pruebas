import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// TODO: Componentes
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ListComponent} from './components/crud/list/list.component';
import { ListDisableComponent } from './components/crud/list-disable/list-disable.component';

// TODO: Guards
import {AuthGuard} from './guards/auth/auth.guard';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'sign-in', component: SigninComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'list-users', component: ListComponent, canActivate: [AuthGuard]},
  {path: 'list-users-disable', component: ListDisableComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
