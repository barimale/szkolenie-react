import { useUsers } from '../contexts/UsersContext';

const AddUser = () =>{
    const { addUser } = useUsers()
 
  const handleAdd = () => {
    const message = prompt('Enter user name: ')
    if (message) {
        addUser(message)
    }
  }
 
  return <button onClick={handleAdd}>Add User</button>
}

export default AddUser;