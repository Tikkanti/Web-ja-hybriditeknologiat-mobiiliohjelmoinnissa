import React, { useLayoutEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function DetailsScreen({navigation}:any) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: { color: 'black' },
        })
    }, [])

  return (
    <View style={style.container}>
      <Text>Details Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
