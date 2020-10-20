import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../../config/AppConfig';
import { Observable } from 'rxjs';

const BASE_URL = AppConfig.BASE_URL;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({ ContentType: 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(`${BASE_URL}login`, user, HTTP_OPTIONS);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${BASE_URL}register`, user, HTTP_OPTIONS);
  }
}
