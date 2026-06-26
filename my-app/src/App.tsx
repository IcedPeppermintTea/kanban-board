import {useState} from "react"
import Board from "./components/Board.tsx"

// define the objects for the page
export type Priority = "High" | "Medium" | "Low"

export type Task = {
  id: string
  title: string
  priority: Priority
  dueDate: string
}

export type Column = {
  id: string
  title: string
  tasks: Task[]
}

export type BoardData = {
  title: string
  columns: Column[]
}

// add initial data for the objects
const initialData: BoardData = {
  title: "My Kanban Board",
  columns: [
    {
      id: "todo",
      title: "To Do",
      tasks: [
        {
          id: "task-1",
          title: "Learn React Hooks",
          priority: "Medium",
          dueDate: "None"
        }
      ]
    },
    {
      id: "in-progress",
      title: "In Progress",
      tasks: []
    },
    {
      id: "done",
      title: "Done",
      tasks: []
    },
  ]
}

// react app function
function App() {
  const [board, setBoard] = useState<BoardData>(initialData)

  return (
    <Board data={board}/>
  )
}

export default App