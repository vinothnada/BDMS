import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from 'src/app/home/home.component'
import {SigninComponent} from 'src/app/pages/signin/signin.component';
import {RegistrationComponent} from 'src/app/pages/registration/registration.component';
import {CommunityComponent} from 'src/app/pages/community/community.component';
import {LoginComponent} from 'src/app/admin/login/login.component';
import {AdminregistrationComponent} from 'src/app/admin/adminregistration/adminregistration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/registration', component: AdminregistrationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
