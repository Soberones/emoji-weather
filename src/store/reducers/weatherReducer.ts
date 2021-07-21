import {GET_WEATHER, GET_WEATHER_ERROR} from '../types';

const initialState = {
  weather: [],
  loading: true,
  error: false,
  errorMessage: null,
};

export default function Weather(state = initialState, action: {type: any; payload: any}) {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: action.payload,
        loading: false,
        error: false,
      };
    case GET_WEATHER_ERROR:
      return {
        loading: false,
        error: true,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
}
