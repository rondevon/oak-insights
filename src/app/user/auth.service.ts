import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serviceBaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userData: any): Observable<any> {
    // To be removed
    userData = {
      email: 'lcc@oak.com',
      password: 'oak'
    };
    return this.http.post(`${serviceBaseUrl}auth/login`, userData);
  }
}
