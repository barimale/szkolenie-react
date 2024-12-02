import React from "react";

const Task = React.memo((props) => {
    return (
        <div style={{display: 'flex'}}>
            <p>{props.data.title}</p>
            <button onClick={() => props.delete(props.data.id)}>Usuń</button>
        </div>
    )
});

export default Task;