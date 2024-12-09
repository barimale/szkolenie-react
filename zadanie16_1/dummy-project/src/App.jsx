import './App.css'
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import UsersCount from './components/UsersCount';
import { useEffect } from 'react';
import { useUsers } from './contexts/UsersContext';

function App() {
  const {addUser} = useUsers();

  useEffect(()=>{
    setTimeout(()=> {
      addUser('userName1')
    }, 500)
    setTimeout(()=> {
      addUser('userName2')
    }, 1500)
  }, []);

  return (
    <>
      <header><h2>Users list:</h2>
      </header>
      <AddUser />
      <UsersCount />
      <UsersList />
      <footer>
      </footer>
    </>
  )
}

export default App
