import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../../config/AppConfig';
import { Observable } from 'rxjs';

import { User } from '../../models/User';

const BASE_URL = AppConfig.BASE_URL;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({ ContentType: 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post(`${BASE_URL}login`, user, HTTP_OPTIONS);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${BASE_URL}register`, user, HTTP_OPTIONS);
  }

  isLoggedIn(): any {
    let user: User = JSON.parse(localStorage.getItem('user'));
    if (user == null) {
      return Promise.reject(false);
    }
    if (!user.token) {
      return Promise.reject(false);
    }

    return this.http
      .get(`${BASE_URL}token/${user.token}`)
      .toPromise()
      .then(() => true)
      .catch(() => {
        localStorage.clear();
        return false;
      });
  }

  userIsEnterprise(): any {
    let user: User = JSON.parse(localStorage.getItem('user'));
    if (user == null) {
      return Promise.reject(false);
    }
    if (!user.token) {
      return Promise.reject(false);
    }

    return this.http
      .get(`${BASE_URL}token/${user.token}/enterprise`)
      .toPromise()
      .then(() => true)
      .catch(() => {
        return false;
      });
  }

  userIsAdmin(): any {
    let user: User = JSON.parse(localStorage.getItem('user'));
    if (user == null) {
      return Promise.reject(false);
    }
    if (!user.token) {
      return Promise.reject(false);
    }

    return this.http
      .get(`${BASE_URL}token/${user.token}/admin`)
      .toPromise()
      .then(() => true)
      .catch(() => {
        return false;
      });
  }
}
