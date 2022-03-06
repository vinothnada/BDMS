import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { SigninComponent } from './pages/signin/signin.component';
import { LeftsidebarComponent } from './includes/leftsidebar/leftsidebar.component';
import { CommunityComponent } from './pages/community/community.component';
import { LeftSidebarCommunityComponent } from './includes/left-sidebar-community/left-sidebar-community.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminregistrationComponent } from './admin/adminregistration/adminregistration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    LeftsidebarComponent,
    CommunityComponent,
    LeftSidebarCommunityComponent,
    RegistrationComponent,
    LoginComponent,
    AdminregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
