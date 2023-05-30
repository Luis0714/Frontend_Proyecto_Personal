import { Injectable } from '@angular/core';
import { API_ROUTES } from 'src/apis-routes';
import { CredentialModel } from 'src/app/Models/Authenticated/CredentilsModel';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ResponseModel } from 'src/app/Models/Responses/ResponseModel';
import { TokenService } from '../Tokens/token.service';
import { GetUserModel } from 'src/app/Models/Users/GetUserModel';
@Injectable({
  providedIn: 'root'
})
export class AutorizationService {
  private apiUrl = `${API_ROUTES.AccountUrl}`;
 
  constructor(
    private Http:HttpClient,
    private tokenservice : TokenService
  ) { }
  login(credentials:CredentialModel):Observable<ResponseModel>{
    return this.Http.post<ResponseModel>(`${this.apiUrl}/authenticate`,credentials)
          .pipe(
            tap(response => {
              this.tokenservice.saveToken(response.data)
              this.getProfile().subscribe(response =>{
                this.tokenservice.saveUserToken(response.data)
              })

            })
          );
  }
  getProfile():Observable<ResponseModel>{
    return this.Http.get<ResponseModel>(`${this.apiUrl}/profile`,{
    })
  }
}
