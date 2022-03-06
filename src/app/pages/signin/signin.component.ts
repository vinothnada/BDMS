import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private signinService: SigninService) { }

  ngOnInit(): void {
  }

  goToPage(pageName: String):void{
    this.router.navigate([`${pageName}`]);
  }

  async loginuser():Promise<void>{
    let username = (<HTMLInputElement>document.getElementById('username')).value;
    let password = (<HTMLInputElement>document.getElementById('password')).value;

    let response = await this.signinService.getLoginSubmit(username,password);
    response == '200' ?  location.replace('home') : location.replace('signin');

  }

}
