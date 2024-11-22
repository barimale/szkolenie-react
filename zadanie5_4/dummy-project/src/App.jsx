import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeBanner from './components/WelcomeBanner';

function App() {
  return (
    <>
      <header>
      </header>
      <WelcomeBanner username='Mateusz Wolnica' isPremium={true} />
      <footer>
      </footer>
    </>
  )
}

export default App
