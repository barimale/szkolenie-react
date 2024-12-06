import './App.css'
import { Routes, Route } from "react-router";
import Home from './components/Home';
import WeatherDetails from './components/WeatherDetails';

function App() {
  return (
    <>
      <header><h2>Prognoza pogody</h2>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path={'products'} element={<Home />} />
        <Route path={'products/:id'} element={<WeatherDetails />} />
      </Routes>
      <footer>
      </footer>
    </>
  )
}

export default App
