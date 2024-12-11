import './App.css'

type Worker = {
  name: string,
  age: number,
  tasks: Array<string>
}

function App() {
  const tasks: string[] = ['task1', 'task2', 'task3'];
  const worker: Worker = { name: 'John Doe', age: 25, tasks: tasks };

  return (
    <>
      <div>
        {worker.tasks.map((item, index)=>{
          return <p key={index}>{item}</p>
        })}
      </div>
    </>
  )
}

export default App
