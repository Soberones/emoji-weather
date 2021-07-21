import React, {useEffect} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-easy-icon';
import {useDispatch, useSelector} from 'react-redux';
import {getCityForecast} from '~/store/actions/getWeatherAction';
import DayliCard from './dayliCard';

export default function TodayCards() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCityForecast('Hrodna'));
  }, [dispatch]);

  const forecastData = useSelector((state: RootStateOrAny) => state.Forecast);
  const {loading, error, errorMessage, forecast} = forecastData;

  const fourHoursForecast = forecast?.list?.slice(0, 10);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today</Text>
        <View style={styles.buttonContainer}>
          {/* <Pressable> */}
          <Text style={styles.button}>7 days</Text>
          {/* </Pressable> */}

          <Icon type="feather" name="chevron-right" color="#ea3348" size={15} />
        </View>
      </View>
      <ScrollView horizontal>
        <View style={styles.cardsContainer}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            fourHoursForecast?.map((i) => (
              <DayliCard key={i.dt} temp={i.main.temp} date={i.dt_txt} />
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {display: 'flex', marginHorizontal: 30, marginTop: 10},
  header: {display: 'flex', flexDirection: 'row', justifyContent: 'space-between'},
  title: {
    color: 'black',
    fontSize: 20,
    lineHeight: 20,
    fontFamily: 'righteous',
  },
  button: {
    color: '#ea3348',
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'righteous',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
});
