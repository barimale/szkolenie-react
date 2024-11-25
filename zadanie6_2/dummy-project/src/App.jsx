import './App.css'
import { useState } from 'react';

function App() {
  const [className, setClassName] = useState('light')

  const toggle = () => {
    setClassName((prevClassName => {
      if(prevClassName === 'dark')
        return 'light';
      if(prevClassName === 'light')
        return 'dark';
    }));
  }
  return (
    <>
      <header className={className}>
        <button className={className} onClick={toggle}>Przełącz</button>
      </header>
      <main  className={className} style={{
        height: '200px',
        width: '400px'
      }}>
        <p style={{margin: 'auto'}}>Demo data</p>
      </main>
      <footer  className={className}>
      </footer>
    </>
  )
}

export default App
