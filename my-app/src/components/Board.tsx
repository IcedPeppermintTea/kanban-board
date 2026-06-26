import { type BoardData } from "../App"

// create the type that describes what the component will receive
type BoardProps = {
    data: BoardData
}

// create the component Board
function Board({data}: BoardProps) {
    return (
        <div>
            <h1>{data.title}</h1>
            <div>
                {/* map each of the columns*/}
                {data.columns.map(column => (
                    <div key={column.id}>
                        <h2>{column.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

// export the component
export default Board