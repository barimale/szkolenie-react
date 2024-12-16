import { Route, Routes } from 'react-router'
import './App.css'
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import CustomerDetails from './components/CustomerDetails';

function App() {
 
  return (
    <>
      <header style={{width: '100%'}}>
        <h1>Header</h1>
      </header>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='customers/:id' element={<CustomerDetails />} />
      </Routes>
      <footer>
        <h4>Footer</h4>
      </footer>
    </>
  )
}

export default App
