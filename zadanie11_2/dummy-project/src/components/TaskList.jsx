import Task from './Task';
import { useState, useCallback } from 'react';

const TaskList = (props) => {
    const [tasks, useTasks] = useState(props.tasks);

    const deleteItem = (itemId) => {
        const filtered = tasks.filter(p => p.id !== itemId);
        console.log(JSON.stringify(filtered));
        useTasks(filtered);
    };

    // ???
    const increment = useCallback(() => {
        setCount(count + 1)
      }, [count])

    return (
        <>
            {tasks.map((item, index) => {
                return (<Task key={index} data={item} delete={deleteItem} />)
            })}
        </>
    )
}

export default TaskList;