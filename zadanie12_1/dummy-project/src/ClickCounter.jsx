import useClickCounter from './hooks/useClickCounter';
import './App.css'

function ClickCounter() {
  const [counter, increment] = useClickCounter(0);

  return (
    <>
      <header>
      </header>
      <p>{counter}</p>
      <button onClick={() => increment()}>Kliknij +1</button>
      <footer>
      </footer>
    </>
  )
}

export default ClickCounter
