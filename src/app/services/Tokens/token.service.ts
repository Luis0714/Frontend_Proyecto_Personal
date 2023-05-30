import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetUserModel } from 'src/app/Models/Users/GetUserModel';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(

  ) { }

  saveToken(token: string) {
    localStorage.setItem('Token', token);
  }
  saveUserToken(user: GetUserModel) {
    const userJSON = JSON.stringify(user);
    localStorage.setItem('UserSesion', userJSON);
  }

  getToken() {
    const token = localStorage.getItem('Token')
    return token;
  }
}
