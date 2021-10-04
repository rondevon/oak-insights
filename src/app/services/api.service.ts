import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getNews(): Observable<any> {
    return this.httpClient.get(environment.NewsApi);
  }

  public getWeather(location: string): Observable<any> {
    return this.httpClient.get(environment.WeatherApi + 'city=' + location + environment.WeatherKey);
  }
}
