import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  logout(): Observable<any> {
    return this.http.get(serviceBaseUrl + 'auth/logout', {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    });
  }
}
