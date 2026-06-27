import { type BoardData, type Task } from "../App"
import Column from "./Column"

// create the type that describes what the component will receive
type BoardProps = {
    data: BoardData
    addTask: (columnId: string, newTask: Task) => void
}

// create the component Board
function Board({data, addTask}: BoardProps) {
    return (
        <div>
            <h1>{data.title}</h1>
            <div className="board">
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