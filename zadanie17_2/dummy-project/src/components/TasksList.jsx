import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, removeTask, done } from '../store/taskSlice'

const TasksList = () => {
  const tasks = useSelector(state => state.task)
  const dispatch = useDispatch()
  const [taskName, setTaskName] = useState('')

  return (
    <div>
      <h2>Tasks List</h2>
      <div>
        <input
          type="text"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={() => {
          dispatch(addTask(taskName))
          setTaskName('')
        }}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map(product => (
          <li key={product.id}>
            {product.text}
            <button onClick={() => dispatch(removeTask(product.id))}>Remove</button>
            <button onClick={() => dispatch(done(product.id))}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TasksList