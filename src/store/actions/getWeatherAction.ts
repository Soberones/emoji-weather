import axios from 'axios';
import {OPEN_WEATHER_API_KEY} from '~/constants/constants';
import WeatherAPI from '../../lib/weatherAPI';
import {
  GET_FORECAST_WEATHER,
  GET_FORECAST_WEATHER_ERROR,
  GET_WEATHER,
  GET_WEATHER_ERROR,
} from '../types';
//import axios from "axios";

export const getCityWeather = (city: string) => async (dispatch: any) => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`,
    );
    dispatch({
      type: GET_WEATHER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_WEATHER_ERROR,
      payload: error,
    });
  }
};

export const getCityForecast = (city: string) => async (dispatch: any) => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPEN_WEATHER_API_KEY}`,
    );
    dispatch({
      type: GET_FORECAST_WEATHER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_FORECAST_WEATHER_ERROR,
      payload: error,
    });
  }
};
