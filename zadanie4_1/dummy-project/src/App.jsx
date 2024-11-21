import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation';
import Section from './components/Section';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Section />
      <Section />
      <Section />
      <footer>
        <Navigation />
      </footer>
    </>
  )
}

export default App
