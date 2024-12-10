import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, removeTask, toggleDone } from '../store/taskSlice'

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
          onChange={e => {
            setTaskName(e.target.value)
          }}
          placeholder="Add a new task"
        />
        <button onClick={() => {
          if (taskName) {
            dispatch(addTask(taskName))
            setTaskName('')
          }
        }}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map(product => (
          <li key={product.id}>
            <p style={{ textDecoration: product.state === 'in progress' ? 'none' : 'line-through' }}>{product.text}</p>
            <button onClick={() => dispatch(removeTask(product.id))}>Remove</button>
            <button onClick={() => dispatch(toggleDone(product.id))}>{product.state === 'in progress' ? 'Done' : 'Undone'}</button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default TasksList