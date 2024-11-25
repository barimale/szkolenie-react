import './App.css'
import Message from './components/Message';
import { useState } from 'react';

function App() {
  const [className, setClassName] = useState('dark')

  const toggle = () => {
    setClassName((prevClassName => {
      if(className === 'dark')
        return 'light';
      if(className === 'light')
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
      </main>
      <footer  className={className}>
      </footer>
    </>
  )
}

export default App
