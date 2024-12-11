import './App.css'

type Score = {
  match: string;
  points: number;
}

interface TeamScore{
  teamName: string;
  scores: Array<Score>;
}

function App() {
  const score: TeamScore = {
    teamName: 'dummy',
    scores: [{
      match: 'A',
      points: 120
    },{
      match: 'B',
      points: 220
    },{
      match: 'C',
      points: 20
    }]
  }

  const avg = score.scores.map(p => p.points).reduce((a,b) => a + b, 0) / score.scores.length;
  console.log(avg);
  return (
    <>
      <div>
       <p>{avg}</p>
      </div>
    </>
  )
}

export default App
