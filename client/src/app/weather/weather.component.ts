import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  myWeather: any;
  temp: number = 0;
  feels: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  icon: string = '';
  city: string = 'Hyderabad';
  units: string = 'Area';
  des: string = '';
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.weatherService.getWeather(this.city, this.units).subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
        this.temp = Math.floor(this.myWeather.main.temp - 273);
        this.feels = Math.floor(
          (this.myWeather.main.feels_like - 273.15) * 1.8 + 32
        );
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.des = this.myWeather.weather[0].main;
        this.summary = this.myWeather.weather[0].main;
        this.icon =
          `https://openweathermap.org/img/wn/` +
          this.myWeather.weather[0].icon +
          `@2x.png`;
      },
      error: (error) => {
        console.log(error.message);
      },

      complete: () => {
        console.log('API Called');
      },
    });
  }
}
