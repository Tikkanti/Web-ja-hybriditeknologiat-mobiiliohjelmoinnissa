import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CustomAppBar from './components/CustomAppBar';




//const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName='Home'
       screenOptions={{
          header: (props) => <CustomAppBar {...props} />,
        }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

