import {type Task as TaskData} from "../App"
import { Draggable } from "@hello-pangea/dnd"

// create the prop object
type TaskProp = {
    task: TaskData
    index: number
}

// create the component Task
function TaskCard({task, index}: TaskProp) {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div 
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="bg-white border border-purple-100 rounded-lg p-3 flex flex-col gap-2">
                    <p className="text-sm font-medium text-purple-900">{task.title}</p>
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