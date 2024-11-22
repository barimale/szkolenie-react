import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard';

function App() {
  return (
    <>
      <header>
      </header>
      <UserCard name='NAME' email='email@email.email' isOnline={true} />
      <footer>
      </footer>
    </>
  )
}

export default App
