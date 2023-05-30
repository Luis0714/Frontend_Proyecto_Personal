import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTES } from 'src/apis-routes';
import { CreateUserModel } from 'src/app/Models/Users/CreateUserModel';
import { Observable } from 'rxjs/internal/Observable';
import { GetUserModel } from 'src/app/Models/Users/GetUserModel';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
private apiUrl = `${API_ROUTES.UserUrl}`;
  constructor(
    private http: HttpClient
  ) { }

  create(user: CreateUserModel): Observable<GetUserModel>{
   return this.http.post<GetUserModel>(`${this.apiUrl}/create`,user)
  }
  getAll(){
    return this.http.get<GetUserModel[]>(`${this.apiUrl}/getAllUsers`)
  }
 
}
