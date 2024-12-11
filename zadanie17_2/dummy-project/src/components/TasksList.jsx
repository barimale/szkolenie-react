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
        {tasks.map(task => (
          <li key={task.id}>
            <p style={{ textDecoration: task.isDone !== true ? 'none' : 'line-through' }}>{task.text}</p>
            <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
            <button onClick={() => dispatch(toggleDone(task.id))}>{task.isDone !== true ? 'Done' : 'Undone'}</button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default TasksList