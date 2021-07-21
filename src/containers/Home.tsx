import Strings from '../../constants/stringsngs';
import React, {useEffect, useState} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {getCityWeather} from '../../store/actions/getWeatherActionion';
import WeatherCard from '~/components/weatherCard';
import TodayCards from '~/components/todayCards';
import {SafeAreaView} from 'react-native-safe-area-context';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default function Home() {
  const window = Dimensions.get('window');

  return (
    <SafeAreaView>
      <View style={{height: window.height}}>
        <WeatherCard />
        <TodayCards />
      </View>
    </SafeAreaView>

    // <View style={styles.container}>
    //   <Text style={styles.welcome}>{Strings.hello}. Welcome to React Native!</Text>
    //   <Text style={styles.instructions}>To get started, edit Home.tsx</Text>
    //   <Text style={styles.instructions}>{instructions}</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
