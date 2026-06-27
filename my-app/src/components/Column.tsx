import { type Column as ColumnData } from "../App"
import TaskCard from "./TaskCard"

// create the prop type
type ColumnProp = {
    column: ColumnData
}

// create the component Column
function Column({column}: ColumnProp) {
    return (
        <div>
            <h2>{column.title}</h2>
            {/* map each of the tasks for the column */}
            <div>
                {column.tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    )
}


// export the component
export default Column