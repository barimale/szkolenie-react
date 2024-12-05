import './App.css'
import { Routes, Route } from "react-router";
import Home from './components/Home';

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
        {/* <Route path='posts' element={<PostsList />} /> */}
      </Routes>
      <footer>
      </footer>
    </>
  )
}

export default App
