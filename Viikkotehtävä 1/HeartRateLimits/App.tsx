import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [age, setAge] = useState<string>("")

  const ageAsNumber: number = !isNaN(Number(age))===true ? Number(age) : 0
  const lowerLimit: number = !isNaN(Number(age))=== true  && Number(age)!==0 ? Number((220-ageAsNumber) * 0.65) : 0
  const upperLimit: number = !isNaN(Number(age))=== true && Number(age)!==0 ? Number((220-ageAsNumber) * 0.85) : 0



  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text style={styles.field}>Enter your age:</Text>
      <TextInput
      style={styles.inputField}
      placeholder='age'
      keyboardType='number-pad'
      value={age}
      onChangeText={setAge}
      ></TextInput>
      <Text>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
      <Text>Upper limit: {upperLimit.toFixed(2)} bpm</Text>
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

  heading: {
    fontSize: 24
  },

  field: {
    marginVertical: 8,
  },

  inputField: {
    paddingLeft: 30,
    paddingRight: 30,
    borderWidth: 1
  }
});
