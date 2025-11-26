import { Pressable, Text, StyleSheet, View } from 'react-native'
import { Task } from '../data/task'

type Props = {
  item: Task
  toggleTaskDone: (id: number) => void
  removeTask: (id: number) => void
}

export const TaskItem = ({ item, toggleTaskDone, removeTask }: Props) => (
 <View style={styles.row}>
    <Pressable onPress={() => toggleTaskDone(item.id)}>
      <Text style={item.isDone ? styles.isDone : styles.isUnDone}>
        {item.text}
      </Text>
    </Pressable>
    {removeTask && (
      <Pressable onPress={() => removeTask(item.id)}>
        <Text style={styles.remove}>Remove</Text>
      </Pressable>
    )}
  </View>
  
)

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  isDone: { textDecorationLine: 'line-through', padding: 5 },
  isUnDone: { padding: 5 },
  remove: { color: 'red', marginLeft: 8, paddingLeft:24 },
})
