import './App.css'
import { Routes, Route } from "react-router";
import Home from './components/Home';

function App() {


  return (
    <>
      <header><h2>Prognoza pogody</h2>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path={'products'} element={<Home />} />
      </Routes>
      <footer>
      </footer>
    </>
  )
}

export default App
