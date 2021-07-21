import moment from 'moment';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KELVIN_TO_CELSIUS} from '~/constants/constants';

export default function DayliCard({temp, date}) {
  const formatTemp = (temp - KELVIN_TO_CELSIUS).toFixed(0);
  const formatdate = moment(date).format('LT ');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.tempText}>{formatTemp}° </Text>
        <Image style={styles.emoji} source={require('../../assets/emoji/cold-face.png')} />
        <Text style={styles.timeText}>{formatdate}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    height: 130,
    width: 80,
    borderWidth: 0.1,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  emoji: {
    height: 50,
    width: 50,
    marginVertical: 4,
  },
  tempText: {
    marginLeft: 10,
    fontSize: 20,
    color: 'black',
    fontFamily: 'righteous',
  },
  timeText: {
    marginTop: 5,
    fontSize: 12,
    color: '#ea3348',
    fontFamily: 'righteous',
  },
});
