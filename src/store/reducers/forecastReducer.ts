import {GET_FORECAST_WEATHER, GET_FORECAST_WEATHER_ERROR} from '../types';

const initialState = {
  forecast: [],
  loading: true,
  error: false,
  errorMessage: null,
};

export default function Forecast(state = initialState, action: {type: any; payload: any}) {
  switch (action.type) {
    case GET_FORECAST_WEATHER:
      return {
        ...state,
        forecast: action.payload,
        loading: false,
        error: false,
      };
    case GET_FORECAST_WEATHER_ERROR:
      return {
        loading: false,
        error: true,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
}
