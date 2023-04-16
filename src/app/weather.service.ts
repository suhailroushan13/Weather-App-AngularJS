import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string, units: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=` +
        city +
        `&appid=8bfb1ea8801cb4cdf9439e1591ada276&units=` +
        units
    );
  }
}
