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
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-purple-700 mb-4">{column.title}</h2>
            {/* map each of the tasks for the column */}
            <div className="flex flex-col gap-3">
                {column.tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
            <div className="mt-3">
                {
                // if true - show the AddTaskForm component*
                showForm ? <AddTaskForm columnId={column.id} addTask={addTask} onClose={closeForm}/>
                // else - show a button that when clicked - opens the form
                :  <button 
                onClick={() => setShowForm(true)}
                className="w-full py-2 rounded-lg text-sm text-purple-400 border border-dashed border-purple-300 hover:bg-purple-100 transition-colors">+ Add Task</button>
                }
            </div>
        </div>
    )
}


// export the component
export default Column