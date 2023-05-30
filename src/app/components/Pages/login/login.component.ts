import { Component } from '@angular/core';
import { CredentialModel } from 'src/app/Models/Authenticated/CredentilsModel';
import { GetUserModel } from 'src/app/Models/Users/GetUserModel';
import { AutorizationService } from 'src/app/services/Authorization/autorization.service';
import { UserServiceService } from 'src/app/services/Users/user-service.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  userCredentials: CredentialModel = { email: '', password: '' }
  private porfile : GetUserModel | null = null;

 constructor(
  private autorizationService: AutorizationService,
  private userService: UserServiceService,
  private formBuilder: FormBuilder,
  private router: Router
 ){
  this.loginForm = this.formBuilder.group({
    email: ['luisandres@gmail.com', [Validators.required, Validators.email]],
    password: ['Hola123*', Validators.required]
  })
 }

 login() {
  this.userCredentials.email = this.loginForm?.value.email;
  this.userCredentials.password = this.loginForm?.value.password;
  this.autorizationService.login(this.userCredentials)
    .subscribe(response => {
      if(response.succeeded){
          this.router.navigate(["/"])
      }
      window.location.href = '/home';
    })
}

getProfile(){
  this.autorizationService.getProfile()
  .subscribe(response =>{
    this.porfile = response.data;
  });
}

onLogin(){
  if (this.loginForm?.invalid) {
    return;
  }
    this.login()
}
}
