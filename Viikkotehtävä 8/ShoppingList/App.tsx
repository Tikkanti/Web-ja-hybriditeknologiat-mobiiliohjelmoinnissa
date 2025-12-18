import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { firestore, collection, addDoc, MESSAGES, serverTimestamp, query, orderBy, onSnapshot, doc, deleteDoc } from './firebase/Config';
import { useEffect, useState } from 'react';

export default function App(): React.ReactElement {
  const [messages, setMessages] = useState<{ id: string; text: string }[]>([])
  const [newMessage, setNewMessage] = useState<string>('')

  useEffect(() => {
    const colRef = collection(firestore, MESSAGES);
    const q = query(colRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snap) => {
      const rows = snap.docs.map(d => {
        const data = d.data() as any;
        return {
          id: d.id,
          text: data.text ?? ''
        };
      });
      setMessages(rows);
    });

    return () => unsubscribe();
  }, []);

  async function handleSend(): Promise<void> {
    if (!newMessage.trim()) return;
    try {
      const colRef = collection(firestore, MESSAGES);
      await addDoc(colRef, {
        text: newMessage,
        createdAt: serverTimestamp(),
      });
      setNewMessage('');
    } catch (err) {
      console.error('Failed to save message', err);
    }
  }

  async function handleDelete(id: string): Promise<void> {
    try {
      const docRef = doc(firestore, MESSAGES, id);
      await deleteDoc(docRef);
    } catch (err) {
      console.error('Failed to delete message', err);
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder='Add item to the shopping list...'
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <Button title='Add' onPress={handleSend} />
      </View>
      <StatusBar style="auto" />
      <ScrollView
        style={{ width: '100%', marginTop: 8 }}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        {messages.map((m, i) => (
          <View key={i} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 4 }}>
            <TextInput editable={false} value={m.text} />
            <Button title="Delete" onPress={() => handleDelete(m.id)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 8,
    marginVertical: 40
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  }
}); 