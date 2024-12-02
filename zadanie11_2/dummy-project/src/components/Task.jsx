import React from "react";

const Task = React.memo((props) => {
    return (
        <>
            <p>{props.data.title}</p>
            <button onClick={() => props.delete(props.data.id)}>Usuń</button>
        </>
    )
});

export default Task;