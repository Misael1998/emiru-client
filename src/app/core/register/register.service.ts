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
export class RegisterService {
  user: User;
  plan: any;
  payment: any;

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    this.user = user;
    return this.http.post(`${BASE_URL}register`, user, HTTP_OPTIONS);
  }

  setUserToken(token: any): void {
    this.user.token = token;
  }

  setPlan(plan: any): void {
    this.plan = plan;
  }

  setPayment(payment: any): void {
    this.payment = payment;
  }

  reisterPlan(): void {
    console.log(this.plan);
    console.log(this.payment);
  }
}
