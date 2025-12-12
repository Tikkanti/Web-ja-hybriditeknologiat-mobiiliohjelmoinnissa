import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View>
      <Text style={styles.header}>Weather App</Text>
    </View>
  )

}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
        fontSize: 32,
        fontWeight: '600',
        color: '#000',
    },
}); 