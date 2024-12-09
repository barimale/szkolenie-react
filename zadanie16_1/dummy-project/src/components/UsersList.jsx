import { useUsers } from "../contexts/UsersContext";

const UsersList = () => {
    const {users, removeUser} = useUsers();
 
  return (
    <div style= {{display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', alignContent: 'space-evenly'}}>
      {users.map((user, index) => (
        <div key={index} style={{border: '1px solid black', margin: '10px', width: '270px', borderRadius: '10px'}}>
          <p style={{padding: '10px'}}>Name: <b>{user.name}</b></p>
          <button style={{margin: '10px'}} onClick={() => removeUser(user.id)}>Usuń</button>
        </div>
      ))}
    </div>
  );
}

export default UsersList;