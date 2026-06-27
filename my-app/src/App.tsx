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

  // Add a new task to a column
  function addTask(columnId: string, newTask: Task) {
    // 1. copy the current columns to change the state
    const updatedColumns: Column[] = board.columns.map(column => {
      // 2. find the right column by using the columnId
      if (column.id === columnId) {
        // 3. add the task to that column's task set while keeping existing ones
        const updatedTasks: Task[] = [...column.tasks, newTask]
        // 4. update column to have the updated task set
        const updatedColumn: Column = {...column, tasks:updatedTasks}
        // 5. return the now changed column
        return updatedColumn
      }
      // 6. if not the right column - return existing column with no changes
      return column
    })


    // 7. copy the board with the updated column set
    const updatedBoard: BoardData = {...board, columns: updatedColumns}

    // 8. update the state
    setBoard(updatedBoard)
  }

  return (
    <Board data={board} addTask={addTask}/>
  )
}

export default App