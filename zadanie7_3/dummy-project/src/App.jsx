import './App.css'
import ControlPanel from './components/ControlPanel';
import { useState } from 'react';

function App() {
  const [visibility, setVisibility] = useState(false);

  const show = () => {
    setVisibility(true);
  };

  const hide = () => {
    setVisibility(false);
  };

  return (
    <>
      <header>
      </header>
      <div>
        <div className={visibility? 'light' : 'dark'}>
          <p>światło</p>
        </div>
        <ControlPanel OnEnabled={() => show()} OnDisabled={() => hide()} />
      </div>
      <footer>
      </footer>
    </>
  )
}

export default App