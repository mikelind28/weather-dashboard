import dotenv from 'dotenv';
dotenv.config();

class Weather {
  city: string;
  date: Date;
  icon: string;
  iconDescription: string;
  tempF: number;
  windSpeed: number;
  humidity: number;
  dt_txt: any;
  weather: any;
  main: any;
  wind: any;

  constructor(city: string, date: Date, icon: string, iconDescription: string, tempF: number, windSpeed: number, humidity: number) {
    this.city = city;
    this.date = date;
    this.icon = icon;
    this.iconDescription = iconDescription;
    this.tempF = tempF;
    this.windSpeed = windSpeed;
    this.humidity = humidity;
  }
}

class WeatherService {
  private baseURL?: string;
  private apiKey?: string;

  constructor() {
    this.baseURL = process.env.API_BASE_URL || '';
    this.apiKey = process.env.API_KEY || '';
  }

  async getWeatherForCity(city: string) {
    // get coordinates based off of city name entered
    const cityResponse = await fetch(`${this.baseURL}/geo/1.0/direct?q=${city}&limit=10&appid=${this.apiKey}`);

    const cityData = await cityResponse.json();

    const lat = cityData[0].lat;
    const lon = cityData[0].lon;

    // get weather data based off of coordinates from above functions
    const weatherResponse = await fetch(`${this.baseURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${this.apiKey}`);

    const weatherData = await weatherResponse.json();

    // map weather data in order to parse it down to required properties
    const weatherDataMapped = weatherData.list.map((each: Weather) => {
        const weatherObject = {
            city: weatherData.city.name,
            date: Intl.DateTimeFormat('en-US').format(Date.parse(each.dt_txt)),
            icon: each.weather[0].icon,
            iconDescription: each.weather[0].description,
            tempF: each.main.temp,
            windSpeed: each.wind.speed,
            humidity: each.main.humidity
        }

        return weatherObject;
    });

    // filter down returned 3-hour weather data so that it's only 1 item per day
    const weatherDataFiltered = weatherDataMapped.filter((_value: Weather, index: number): any => {
      if (index % 8 === 0) {
        return true;
      }
    });

    // fetch current weather based off of lat and lon
    const currentWeatherResponse = await fetch(`${this.baseURL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${this.apiKey}`);

    const currentWeather = await currentWeatherResponse.json();

    // get only the required data from the currentWeather object
    const currentWeatherMapped = {
        city: currentWeather.name,
        date: Intl.DateTimeFormat('en-US').format(Date.now()),
        icon: currentWeather.weather[0].icon,
        iconDescription: currentWeather.weather[0].description,
        tempF: currentWeather.main.temp,
        windSpeed: currentWeather.wind.speed,
        humidity: currentWeather.main.humidity
    }

    // add the currentWeather to the beginning of the weatherDataFiltered array
    weatherDataFiltered.unshift(currentWeatherMapped);

    return weatherDataFiltered;
  }

}

export default new WeatherService();
