import './App.css'
import { Routes, Route } from "react-router";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Settings from './components/Settings';
import BaseLayout from './layouts/BaseLayout';
import AdminLayout from './layouts/AdminLayout';

function App() {

  return (
    <>
      <header>
      </header>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='users' element={<Users />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
      <footer>
      </footer>
    </>
  )
}

export default App
