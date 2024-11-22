import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList';

function App() {
  const items = [
    { id: 1, name: "Laptop", price: 3000 },
    { id: 2, name: "Smartfon", price: 2000 }
  ];

  return (
    <>
      <header>
      </header>
      <ProductList products={items} />
      <footer>
      </footer>
    </>
  )
}

export default App
