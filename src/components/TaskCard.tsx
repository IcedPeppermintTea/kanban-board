import {type Task as TaskData} from "../App"
import { Draggable } from "@hello-pangea/dnd"
import DeleteTaskCard from "./DeleteTaskCard"

// create the prop object
type TaskProp = {
    task: TaskData
    index: number
    deleteTask: (columnId: string, deleteTaskId: string) => void
    columnId: string
}

// create the component Task
function TaskCard({task, index, deleteTask, columnId}: TaskProp) {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div 
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="bg-white border border-purple-100 rounded-lg p-3 flex flex-col gap-2">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-sm font-medium text-purple-900">{task.title}</p>
                        <DeleteTaskCard task={task} deleteTask={deleteTask} columnId={columnId}></DeleteTaskCard>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">{task.priority}</span>
                    </div>
                    <span className="text-xs text-purple-300">{task.dueDate}</span>
                </div>
            )}
        </Draggable>
    )
}

export default TaskCard