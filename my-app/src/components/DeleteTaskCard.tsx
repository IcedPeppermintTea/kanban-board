import {type Task as TaskData} from "../App"
import TrachIcon from "../assets/trashcan.svg"

// create the delete prop
type DeleteProps = {
    task: TaskData
    deleteTask: (columnId: string, deleteTaskId: string) => void
    columnId: string
}

// create the delete component
function DeleteTaskCard({task, deleteTask, columnId}: DeleteProps) {
    return (
        <div>
            <button type="button" onClick={(e) => { 
                e.stopPropagation()
                console.log("delete clicked!", columnId, task.id) 
                deleteTask(columnId, task.id)}}>
                <img src={TrachIcon}/>
            </button>
        </div>
    )
}

export default DeleteTaskCard