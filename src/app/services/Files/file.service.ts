import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROUTES } from 'src/apis-routes';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = `${API_ROUTES.FileUrl}`;
  constructor(
    private http: HttpClient
  ) { }

  uploadFile(file: Blob): Observable<any> {
    const form = new FormData();
    form.append('file', file);
    return this.http.post(`${this.apiUrl}/upload`, form, {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    });
  }
}
