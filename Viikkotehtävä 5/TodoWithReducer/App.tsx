import { StatusBar } from 'expo-status-bar'
import { View, FlatList, StyleSheet } from 'react-native'
import {  useState } from 'react'
import { Header } from './components/Header'
import { InputRow } from './components/InputRow'
import { TaskItem } from './components/TaskItem'
import {useTodos} from './hooks/useTodos'



export default function App() {

  const [newTask, setNewTask] = useState("")
  const { tasks, addTask, toggleTaskDone, removeTask} = useTodos()
 
  const handleAddTask = () => {
    addTask(newTask)
    setNewTask("")
  }

  
  

  return (
    <View style={styles.container}>
      <Header />
      <InputRow newTask={newTask} setNewTask={setNewTask} addTask={handleAddTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem item={item} toggleTaskDone={toggleTaskDone} removeTask={removeTask} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 32,
    padding: 8,
  },
})
