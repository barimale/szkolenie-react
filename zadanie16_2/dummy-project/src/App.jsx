import './App.css'
import ItemsList from './components/ItemsList';
import AddItem from './components/AddItem';
import ItemsCount from './components/ItemsCount';
import { useEffect } from 'react';
import { useItems } from './contexts/CartContext';
import ItemsTotal from './components/ItemsTotal';

function App() {
  const {addItem} = useItems();

  useEffect(()=>{
    setTimeout(()=> {
      addItem('item1', 10)
    }, 500)
    setTimeout(()=> {
      addItem('item2', 20)
    }, 1500)
  }, []);

  return (
    <>
      <header><h2>Cart:</h2>
      </header>
      <AddItem />
      <ItemsList />
      <ItemsCount />
      <ItemsTotal />
      <footer>
      </footer>
    </>
  )
}

export default App
