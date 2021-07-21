import {combineReducers} from 'redux';
import Forecast from './forecastReducer';
import Weather from './weatherReducer';

export default combineReducers({
  Weather,
  Forecast,
  state: (state = {}) => state,
});
