import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
console.log('WeatherReducer', WeatherReducer);
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
