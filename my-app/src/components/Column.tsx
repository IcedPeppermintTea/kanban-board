import { type Column as ColumnData } from "../App"

// create the prop type
type ColumnProp = {
    data: ColumnData
}

// create the component Column
function Column({data}: ColumnProp) {
    return (
        <div>
            <h2>{data.title}</h2>
            {/* map each of the tasks for the column */}
            <div>
                {data.tasks.map(task => (
                    <div key={task.id}>
                        <p>{task.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


// export the component
export default Column