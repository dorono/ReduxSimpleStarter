import axios from 'axios';

const API_KEY = 'feac0acf823ad3373d7e430b6e7c9903';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const FETCH_WEATHER = 'FETCH_WEATHER';

// an action is a function that always includes a type
export function fetchWeather(city) {
  console.log('city', city);
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log('request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
