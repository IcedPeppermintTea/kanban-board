import { type BoardData } from "../App"
import Column from "./Column"

// create the type that describes what the component will receive
type BoardProps = {
    data: BoardData
}

// create the component Board
function Board({data}: BoardProps) {
    return (
        <div>
            <h1>{data.title}</h1>
            <div className="board">
                {/* map each of the columns*/}
                {data.columns.map(column => (
                    <Column key={column.id} column={column}/>
                ))}
            </div>
        </div>
    )
}

// export the component
export default Board