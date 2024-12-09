import './App.css'
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import UsersCount from './components/UsersCount';
import { useEffect } from 'react';
import { useUsers } from './contexts/UsersContext';

function App() {
  const {addUser} = useUsers();

  useEffect(()=>{
    addUser({ name: 'userName1'})
    addUser({ name: 'userName2'})
    addUser({ name: 'userName3'})
    addUser({ name: 'userName4'})
  }, []);

  return (
    <>
      <header>Context API
      </header>
      <AddUser />
      <UsersList />
      <UsersCount />
      <footer>
      </footer>
    </>
  )
}

export default App
