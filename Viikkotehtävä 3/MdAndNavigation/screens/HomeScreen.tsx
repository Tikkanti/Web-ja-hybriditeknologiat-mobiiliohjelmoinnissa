import React, { useLayoutEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';




export default function HomeScreen({navigation}: any) {

useLayoutEffect(() => {
navigation.setOptions({
headerStyle: {backgroundColor: 'white'},
headerTitleStyle: {color: 'black'},
    headerRight: () => (
                <MaterialIcons
                    name='arrow-forward'
                    size={24}
                    color="black"
                    style={{ marginRight:0, padding:0 }}
                    onPress={() => navigation.navigate('DetailsScreen')}
                />
            )
})
}, [])

  return (
    <>
    <View style={style.container}>
      <Text>Home Screen</Text>
    </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


  