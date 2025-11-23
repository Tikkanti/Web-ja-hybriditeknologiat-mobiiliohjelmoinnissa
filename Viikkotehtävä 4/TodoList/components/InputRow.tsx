import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native'

type Props = {
  newTask: string
  setNewTask: (text: string) => void
  addTask: () => void
}

export const InputRow = ({ newTask, setNewTask, addTask }: Props) => (
  <View style={styles.inputRow}>
    <TextInput
      placeholder="Enter task"
      value={newTask}
      onChangeText={setNewTask}
      style={styles.input}
      onSubmitEditing={addTask}
    />
    <Pressable onPress={addTask}>
      <Text style={styles.saveButton}>Save</Text>
    </Pressable>
  </View>
)

const styles = StyleSheet.create({
  inputRow: { flexDirection: 'row' },
  input: { width: '80%', paddingHorizontal: 8 },
  saveButton: { fontSize: 20, color: 'blue', padding: 5 },
})
