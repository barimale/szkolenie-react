import './App.css'
import ProductList from './components/ProductList';

function App() {
  const items = [
    { id: 1, name: "Laptop", price: 3000 },
    { id: 2, name: "Smartfon", price: 2000 },
    { id: 3, name: "Smartfon2", price: 12000 },
    { id: 4, name: "Smartfon3", price: 1000 }
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
