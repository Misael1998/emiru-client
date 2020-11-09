import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../../config/AppConfig';
import { Observable } from 'rxjs';

const BASE_URL = AppConfig.BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPlans(): Observable<any> {
    return this.http.get(`${BASE_URL}plans`);
  }
}
