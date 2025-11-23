import { StatusBar } from 'expo-status-bar'
import { View, FlatList, StyleSheet } from 'react-native'
import * as SQLite from 'expo-sqlite'
import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { InputRow } from './components/InputRow'
import { TaskItem } from './components/TaskItem'


import { Task } from './data/task'

export default function App() {
  const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null)
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const initDb = async () => {
      const database = await SQLite.openDatabaseAsync('todos.db')
      setDb(database)
      await database.execAsync(`
        CREATE TABLE IF NOT EXISTS todos2 (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          text TEXT NOT NULL,
          isDone BOOLEAN NOT NULL DEFAULT 0
        )
      `)
      loadTodos(database)
    }
    initDb()
  }, [])

  const loadTodos = async (database: SQLite.SQLiteDatabase) => {
    const result = await database.getAllAsync<Task>('SELECT * FROM todos2 ORDER BY id DESC')
    setTasks(result.map(t => ({ ...t, isDone: Number(t.isDone) })))
  }

  const addTask = async () => {
    if (!newTask.trim() || !db) return
    await db.runAsync('INSERT INTO todos2 (text) VALUES (?)', newTask)
    setNewTask("")
    loadTodos(db)
  }

  const toggleTaskDone = async (taskId: number) => {
    if (!db) return
    await db.runAsync(
      'UPDATE todos2 SET isDone = CASE WHEN isDone = 1 THEN 0 ELSE 1 END WHERE id = ?',
      [taskId]
    )
    loadTodos(db)
  }

  return (
    <View style={styles.container}>
      <Header />
      <InputRow newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem item={item} toggleTaskDone={toggleTaskDone} />
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
