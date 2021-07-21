import React, {useEffect} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-easy-icon';
import LinearGradient from 'react-native-linear-gradient';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {getCityForecast, getCityWeather} from '~/store/actions/getWeatherAction';

import {KELVIN_TO_CELSIUS} from '~/constants/constants';

import moment from 'moment';

export default function WeatherCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCityWeather('Hrodna'));
    dispatch(getCityForecast('Hrodna'));
  }, [dispatch]);

  const currentWeather = useSelector((state: RootStateOrAny) => state.Weather);
  const {loading, error, errorMessage, weather} = currentWeather;

  const actualTemp = (weather?.main?.temp - KELVIN_TO_CELSIUS).toFixed(1);
  const humidity = weather?.main?.humidity;
  const wind = Math.floor(weather?.wind?.speed);
  const dayLight = (
    (Math.abs(weather?.sys?.sunrise - weather?.sys?.sunset) / 60 / 60) %
    24
  ).toFixed(0);
  const currentDate = moment(new Date()).format('dddd, LL');

  return (
    <LinearGradient colors={['#f45b43', '#ea3348']} style={styles.linearGradient}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.containerCenter}>
            <View style={styles.header}>
              <View style={styles.headerBlock}>
                <Icon style={styles.icon} type="feather" name="globe" color="white" size={30} />
              </View>
              <View style={styles.headerBlock}>
                <Icon style={styles.icon} type="feather" name="map-pin" color="white" size={15} />
                <Text style={styles.cityTitle}>Hrodna</Text>
              </View>
              <View style={styles.headerBlock}>
                <Icon
                  style={styles.icon}
                  type="feather"
                  name="more-vertical"
                  color="white"
                  size={30}
                />
              </View>
            </View>

            <Image style={styles.emoji} source={require('../../assets/emoji/cold-face.png')} />

            <Text style={styles.temperature}>{actualTemp}</Text>

            <Text style={styles.desc}>Hell on earth</Text>
            <Text style={styles.date}>{currentDate}</Text>
            <View style={styles.divider} />
            <View style={styles.footer}>
              <View style={styles.extBlock}>
                <Icon style={styles.icon} type="feather" name="wind" color="white" size={21} />
                <Text style={styles.extBlockText}>{wind} km/h</Text>
                <Text style={styles.extBlockTextSecondary}>warm wind</Text>
              </View>
              <View style={styles.extBlock}>
                <Icon style={styles.icon} type="feather" name="droplet" color="white" size={21} />
                <Text style={styles.extBlockText}>{humidity} %</Text>
                <Text style={styles.extBlockTextSecondary}>humidity</Text>
              </View>
              <View style={styles.extBlock}>
                <Icon style={styles.icon} type="feather" name="sun" color="white" size={21} />
                <Text style={styles.extBlockText}>{dayLight} h/day</Text>
                <Text style={styles.extBlockTextSecondary}>Daylight</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  linearGradient: {
    height: '74%',
    borderRadius: 60,
    position: 'relative',
    margin: 10,
  },
  header: {
    marginTop: 15,
    height: '13%',
    display: 'flex',
    flexDirection: 'row',
    width: '110%',
    justifyContent: 'space-around',
  },
  containerCenter: {display: 'flex', alignItems: 'center', flex: 1},
  emoji: {height: 170, width: 170, marginBottom: 20, marginTop: 60},
  temperature: {
    lineHeight: 120,
    fontSize: 120,
    color: 'white',
    fontFamily: 'righteous',
  },
  desc: {
    marginTop: -20,
    fontSize: 20,
    color: 'white',
    fontFamily: 'righteous',
  },
  date: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'righteous',
  },
  divider: {
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: '#ffffff60',
    height: 0.3,
    width: '90%',
  },
  footer: {display: 'flex', flexDirection: 'row'},
  extBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 40,
  },
  extBlockText: {fontSize: 16, color: 'white', fontFamily: 'righteous'},
  extBlockTextSecondary: {fontSize: 13, color: '#ffffffba', fontFamily: 'righteous'},
  icon: {marginBottom: 8},
  headerBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cityTitle: {
    color: 'white',
    fontFamily: 'righteous',
    fontSize: 16,
    lineHeight: 16,
    marginHorizontal: 3,
  },
});
