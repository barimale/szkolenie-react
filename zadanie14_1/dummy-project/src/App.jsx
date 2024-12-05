import './App.css'
import { Routes, Route } from "react-router";
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';

function App() {
  const products = [
    { id: '1', name: 'Laptop' },
    { id: '2', name: 'Smartphone' },
    { id: '3', name: 'Tablet' },
  ];

  return (
    <>
      <header>
      </header>
      <Routes>
        <Route index element={<Home products={products}/>} />
        <Route path='product/:id' element={<ProductDetails products={products}/>} />
      </Routes>
      <footer>
      </footer>
    </>
  )
}

export default App
