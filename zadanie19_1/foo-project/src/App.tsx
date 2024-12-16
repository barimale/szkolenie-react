import { Route, Routes } from 'react-router'
import './App.css'
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';

function App() {
 
  return (
    <>
      <header>
      </header>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login />} />
        <Route path='signUp' element={<SignUp />} />
      </Routes>
      <footer>
      </footer>
    </>
  )
}

export default App
