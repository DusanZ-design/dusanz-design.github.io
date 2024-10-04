import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private weatherService: WeatherService, private http: HttpClient) {

  }
  cityName: string = '';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getLocation();
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName ='';
  }

  private getLocation() {
    this.http.get('https://ipapi.co/json/').subscribe((response: any) => {
      this.cityName = response.city;
      this.getWeatherData(this.cityName);
    });
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(response);
        }
      });
  }

  title = 'WeatherApp';
}
