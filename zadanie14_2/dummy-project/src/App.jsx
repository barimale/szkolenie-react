import './App.css'
import { Routes, Route } from "react-router";
import Home from './components/Home';

function App() {
  const products = [
    { id: '1', name: 'Laptop', category: 'laptops' },
    { id: '2', name: 'Smartphone', category: 'smartphones' },
    { id: '3', name: 'Tablet', category: 'tablets' },
  ];

  return (
    <>
      <header>
      </header>
      <Routes>
        <Route index element={<Home products={products}/>} />
        <Route path={'products'} element={<Home products={products}/>} />
      </Routes>
      <footer>
      </footer>
    </>
  )
}

export default App
