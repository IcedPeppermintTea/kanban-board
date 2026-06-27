import { type Column as ColumnData, type Task } from "../App"
import TaskCard from "./TaskCard"
import AddTaskForm from "./AddTaskForm"
import { useState } from "react"

// create the type that describes what the component will receive
type ColumnProp = {
    column: ColumnData
    addTask: (columnId: string, newTask: Task) => void
}

// create the component Column
function Column({column, addTask}: ColumnProp) {
    // handle AddTaskForm state
    const [showForm, setShowForm] = useState<boolean>(false)

    function closeForm() {
        setShowForm(false)
    }

    return (
        <div>
            <h2>{column.title}</h2>
            {/* map each of the tasks for the column */}
            <div>
                {column.tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
            <div>
                {
                // if true - show the AddTaskForm component*
                showForm ? <AddTaskForm columnId={column.id} addTask={addTask} onClose={closeForm}/>
                // else - show a button that when clicked - opens the form
                :  <button onClick={() => setShowForm(true)}>+ Add Task</button>
                }
            </div>
        </div>
    )
}


// export the component
export default Column