import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { serviceBaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userData: any): Observable<any> {
    let formdata = new FormData();
    formdata.append('email', userData.email);
    formdata.append('password', userData.password);
    // To be removed
    // userData = {
    //   email: 'lcc@oak.com',
    //   password: 'oak'
    // };
    return this.http.post(`${serviceBaseUrl}auth/login`, formdata);
  }

  forgot(email: string): Observable<any> {
    let formdata = new FormData();
    formdata.append('email', email);
    return this.http.post(`${serviceBaseUrl}auth/forgot-password`, formdata);
  }

  resetPassword(userData: any): Observable<any> {
    if(!localStorage.getItem('email')) return of(null)
    let formdata = new FormData();
    formdata.append('email', localStorage.getItem('email') || '');
    formdata.append('password', userData.password);
    formdata.append('password_confirmation', userData.password_confirmation);
    formdata.append('token', userData.token);
    return this.http.post(`${serviceBaseUrl}auth/reset-password`, formdata);
  }

  logout(): Observable<any> {
    return this.http.get(serviceBaseUrl + 'auth/logout', {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    });
  }
}
