import { Route, Routes } from 'react-router'
import './App.css'
import Login from './components/Login';

function App() {
 
  return (
    <>
      <header>
      </header>
      <Routes>
        <Route path='login' element={<Login />} />
      </Routes>
      <footer>
      </footer>
    </>
  )
}

export default App
