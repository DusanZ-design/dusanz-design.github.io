// import { WeatherDataDTO } from './../models/weather.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from './../../environments/environment';
import { WeatherData } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(`${environment.weatherApiBaseUrl}/forecast.json`, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('q', cityName)
        .set('days', 0)
        // .set('dt', Date.now().toLocaleString())
    });
  }
    // .pipe(
    //   map((res) => {
    //   Observable<WeatherDataDTO> res1 = {
    //     location: res.location.name
    //     current: {
    //       temp_c: res.current.temp_c
    //       wind_kph: res.current.wind_kph
    //     }
    //     forcast: {
    //       mintemp_c: res.forecast.forecastday[0].day.mintemp_c
    //       maxtemp_c: res.forecast.forecastday[0].day.maxtemp_c
    //     }
    //   }
    // }));
}


