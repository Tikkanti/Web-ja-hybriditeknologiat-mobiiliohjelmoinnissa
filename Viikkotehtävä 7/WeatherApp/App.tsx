import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, ImageComponent, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'
import { Weather } from './types/weatherTypes';
import Header from './components/Header';
import Constants from 'expo-constants'
import { useLocation } from './hooks/useLocation';
import { useWeather } from './hooks/useWeather';
import WeatherInfo from './components/WeatherInfo';



export default function App() {

  const { latitude, longitude } = useLocation()
  const weather = useWeather(latitude, longitude)


  return (
    <View style={styles.container}>
      <Header />
      <WeatherInfo weather={weather} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
