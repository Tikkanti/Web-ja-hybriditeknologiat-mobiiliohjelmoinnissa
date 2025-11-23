import { Pressable, Text, StyleSheet } from 'react-native'
import { Task } from '../data/task'

type Props = {
  item: Task
  toggleTaskDone: (id: number) => void
}

export const TaskItem = ({ item, toggleTaskDone }: Props) => (
  <Pressable onPress={() => toggleTaskDone(item.id)}>
    <Text style={item.isDone === 1 ? styles.isDone : styles.isUnDone}>
      {item.text}
    </Text>
  </Pressable>
)

const styles = StyleSheet.create({
  isDone: { textDecorationLine: 'line-through', padding: 5 },
  isUnDone: { padding: 5 },
})
