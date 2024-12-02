import { useRef, useEffect } from 'react';
import './App.css'

function App() {
  const inputRef = useRef(undefined);
  useEffect(()=>{
    if(inputRef.current)
    {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <header>
      </header>
      <label htmlFor="title">Tytuł</label>
        <input
          type="text"
          id="title"
          name="title"
          ref={inputRef}
        />
      <footer>
      </footer>
    </>
  )
}

export default App
