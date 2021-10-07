import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment, serviceBaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getNews(): Observable<any> {
    return this.httpClient.get(environment.NewsApi);
  }

  public getWeather(location: string): Observable<any> {
    return this.httpClient.get(
      environment.WeatherApi + 'city=' + location + environment.WeatherKey
    );
  }

  public getHomepageApi(month: string): Observable<any> {
    if (localStorage.getItem('token')) {
      return this.httpClient.get(serviceBaseUrl + 'site/home?month=' + month, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
    } else return of(null);
  }

  public getMyprofileApi(): Observable<any> {
    if (localStorage.getItem('token')) {
      return this.httpClient.get(serviceBaseUrl + 'auth/me', { 
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }); 
    } else return of(null);
  }

  public getHeatMapData(month: String): Observable<any> {
    if (localStorage.getItem('token')) {
      return this.httpClient.get(serviceBaseUrl + 'site/consumption/month/hour?month=' + month, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
    } else return of(null);
  }

}
