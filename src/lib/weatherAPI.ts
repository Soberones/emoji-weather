const apiEntry = 'api.openweathermap.org/data/2.5/weather';
const apiKey = 'dfdc2ed8843645051ed031e5a35dd5a9';
import axios from 'axios';

export default class WeatherAPI {
  static fetchWeatherByCity(cityName: any) {
    const url = `${apiEntry}?q=${cityName}&appid=${apiKey}`;
    return axios.get(url);
  }
}
