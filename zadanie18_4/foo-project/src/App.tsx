import './App.css'

type Score = {
  subject: string,
  score: number
}

type Student = {
  name: string,
  results: Array<Score>
}

function App() {
 const john: Student = {
  name: 'John Doe',
  results: [
    {
      subject: 'subject1',
      score: 75
    },
    {
      subject: 'subject2',
      score: 15
    }
  ]
 };

 const avg = john.results.map(p => p.score).reduce((a,b)=> a+ b, 0) / john.results.length;
 const isOver50P = Boolean(avg >= 50);

 console.log(avg)
 console.log(isOver50P)
  return (
    <>
      <div>
        <p>AVG: {avg}</p>
        <p>isOver50P: {String(isOver50P)}</p>
      </div>
    </>
  )
}

export default App
