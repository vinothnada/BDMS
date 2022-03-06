import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor() {}

  getLoginSubmit(username:String, password:String): Promise<String> {

    let endPoint = `/api/userlogin?username=${username}&journeyId=${password}`;
    
    return axios
      .get(endPoint)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }
}
