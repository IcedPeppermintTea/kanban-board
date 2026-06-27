import { useState } from "react"
import { type Priority, type Task} from "../App"

// create the type that describes what the component will receive
type addTaskProp = {
    columnId: string
    addTask: (columnId: string, newTask: Task) => void
    onClose: () => void
}


// create the component Task Form
function AddTaskForm({columnId, addTask, onClose}: addTaskProp) {
    // create the state variables for each form field
    const [title, setTitle] = useState<string>("")
    const [priority, setPriority] = useState<Priority>("Medium")
    const [dueDate, setDueDate] = useState<string>("")

    function handleSubmit() {
        // create new task item with the updated values
        const id = crypto.randomUUID() // generate random string id
        const newTask: Task = {id, title, priority, dueDate}

        // populate new task in the board
        addTask(columnId, newTask)

        // clear the form values
        setTitle("")
        setPriority("Medium")
        setDueDate("")

        // close the form
        onClose()
    }

    return (
        <div>
            {/* input for title */}
            <label>Title:</label>
            <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
            {/* dropdown for priority */}
            <label>Priority:</label>
            <select name="priority" id="priority" onChange={(e) => 
                setPriority(e.target.value as Priority)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            {/* input for due date */}
            <label>Date:</label>
            <input 
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}/>

            {/* submit button that calls handleSubmit */}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddTaskForm