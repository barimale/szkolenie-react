import { useState } from 'react';
import './App.css'
import TaskList from './components/TaskList';

function App() {
  const [tasks] = useState([{
    title: 'title1',
    id: '1'
  },
  {
    title: 'title2',
    id: '2'
  },
  {
    title: 'title3',
    id: '3'
  }]);

  return (
    <>
      <header>
      </header>
      <p>Task list:</p>
      <TaskList tasks={tasks} />
      <footer>
      </footer>
    </>
  )
}

export default App
