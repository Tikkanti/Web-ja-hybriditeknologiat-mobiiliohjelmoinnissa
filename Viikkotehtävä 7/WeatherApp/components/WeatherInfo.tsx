import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Weather } from '../types/weatherTypes'

export default function WeatherInfo({ weather }: { weather: Weather }) {
    return (
        <View>
            <Text style={styles.text}>
                Temperature: {weather.temperature} °C{"\n"}
                Feels like: {weather.feelsLike} °C{"\n"}
                Wind: {weather.wind} m/s
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        width: '100%',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
});