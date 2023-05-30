import { Component } from '@angular/core';
import { GetUserModel } from 'src/app/Models/Users/GetUserModel';
import { TokenService } from 'src/app/services/Tokens/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  loggedIn : boolean = this.tokenService.getToken() != null;

  user : GetUserModel | null = null;
  constructor(
   private tokenService:TokenService,
  ){
   this.getUserLogged()
  }

  ngOnInit(): void {
    this.getUserLogged()
  }

  signOff(){
    this.loggedIn = false;
    localStorage.removeItem('UserSesion')
    localStorage.removeItem('Token')
  }
  getUserLogged(){
    if(this.loggedIn){
      const userJSON = localStorage.getItem('UserSesion');
      if (userJSON) {
         this.user = JSON.parse(userJSON);
         console.log("Usuario en sesion: ", this.user)
      }
    }
  }
}
