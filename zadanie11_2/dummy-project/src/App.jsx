import { useState } from 'react';
import './App.css'
import TaskList from './components/TaskList';

function App() {
  const [tasks] = useState([{
    title: 'Zadanie 1',
    id: '1'
  },
  {
    title: 'Zadanie 2',
    id: '2'
  },
  {
    title: 'Zadanie 3',
    id: '3'
  }]);

  return (
    <>
      <header>
      </header>
      <p>Lista zadań:</p>
      <TaskList tasks={tasks} />
      <footer>
      </footer>
    </>
  )
}

export default App
