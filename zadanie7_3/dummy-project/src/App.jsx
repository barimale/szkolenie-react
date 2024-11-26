import './App.css'
import ControlPanel from './components/ControlPanel';
import { useState, useEffect } from 'react';

function App() {
  const [visibility, setVisibility] = useState(false);

  const show = () => {
    setVisibility(true);
  };

  const hide = () => {
    setVisibility(false);
  };

  useEffect(()=>{
    if(visibility)
    {
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
    }else{
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'black';
    }
  }, [visibility]);

  return (
    <>
      <header>
      </header>
      <>
        {/* <div className={visibility ? 'light' : 'dark'}> */}
          <p>{visibility ? 'światło' : 'brak światła'}</p>
        {/* </div> */}
        <ControlPanel OnEnabled={show} OnDisabled={hide} />
      </>
      <footer>
      </footer>
    </>
  )
}

export default App
