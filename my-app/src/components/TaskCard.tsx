import {type Task as TaskData} from "../App"

// create the prop object
type TaskProp = {
    task: TaskData
}

// create the Task component
function TaskCard({task}: TaskProp) {
    return (
        <div>
            <p>{task.title}</p>
            <p>{task.priority}</p>
            <p>{task.dueDate}</p>
        </div>
    )
}

export default TaskCard