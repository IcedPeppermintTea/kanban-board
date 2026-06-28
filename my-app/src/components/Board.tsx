import { type BoardData, type Task } from "../App"
import Column from "./Column"
import { Droppable } from "@hello-pangea/dnd"

// create the type that describes what the component will receive
type BoardProps = {
    data: BoardData
    addTask: (columnId: string, newTask: Task) => void
}

// create the component Board
function Board({data, addTask}: BoardProps) {
    return (
        <div className="bg-fuchsia-50 min-h-screen font-mono p-8">
            <h1 className="text-3xl font-semibold text-purple-900 mb-8">{data.title}</h1>
            <div className="grid grid-cols-3 gap-6">
                {/* map each of the columns*/}
                {data.columns.map(column => (
                    <Column key={column.id} column={column} addTask={addTask}/>
                ))}
            </div>
        </div>
    )
}

// export the component
export default Board