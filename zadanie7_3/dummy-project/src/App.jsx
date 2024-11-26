import './App.css'
import ControlPanel from './components/ControlPanel';
import { useState, useEffect } from 'react';

function App() {
  const [visibility, setVisibility] = useState(false);

  const turnOn = () => {
    setVisibility(true);
  };

  const turnOff = () => {
    setVisibility(false);
  };

  useEffect(() => {
    if (visibility) {
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'black';
    }
  }, [visibility]);

  return (
    <>
      <header>
      </header>
      <>
        <p>{visibility ? 'światło' : 'brak światła'}</p>
        <ControlPanel OnEnabled={turnOn} OnDisabled={turnOff} />
      </>
      <footer>
      </footer>
    </>
  )
}

export default App
