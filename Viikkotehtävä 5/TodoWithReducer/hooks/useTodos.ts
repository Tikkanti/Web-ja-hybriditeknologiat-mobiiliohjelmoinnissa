import { useReducer, useRef } from "react"
import { Task } from "../data/task"

type TodolistAction =
  | { type: 'ADD'; payload: Task }
  | { type: 'REMOVE'; payload: number }
  | { type: 'TOGGLE'; payload: number }

const todolistReducer = (state: Task[], action: TodolistAction): Task[] => {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state]

    case 'REMOVE':
      return state.filter(t => t.id !== action.payload)

    case 'TOGGLE':
      return state.map(t =>
        t.id === action.payload ? { ...t, isDone: !t.isDone } : t
      )

    default:
      return state
  }
}

export const useTodos = () => {
  const nextId = useRef(1)
  const [tasks, dispatch] = useReducer(todolistReducer, [])

  const addTask = (text: string) => {
    if (!text.trim()) return
    const newTask: Task = {
      id: nextId.current++,
      text,
      isDone: false,
    }
    dispatch({ type: 'ADD', payload: newTask })
  }

  const toggleTaskDone = (id: number) => {
    dispatch({ type: 'TOGGLE', payload: id })
  }

  const removeTask = (id: number) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  return { tasks, addTask, toggleTaskDone, removeTask }
}
