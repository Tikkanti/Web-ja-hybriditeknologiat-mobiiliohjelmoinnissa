import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, Button } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function App() {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  
  return (
   <SafeAreaView style={styles.container}>
    <Modal
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {setModalVisible(false)}}>
    <View style={styles.modalView}>
      <Text style={styles.modalText}>This is modal..</Text>
      <Button title="Close" onPress={() => {setModalVisible(false)}}></Button>
    </View>   
    </Modal>
    <Pressable onPress={() => {setModalVisible(true)}}>
      <Text>Show modal message</Text>
    </Pressable>
   </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#cacacaff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  modalText: {
    padding: 50
  }
});
