import { useUsers } from "../contexts/UsersContext";

const UsersList = () => {
    const {users, removeUser} = useUsers();
 
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <p>{JSON.stringify(user)}</p>
          <button onClick={() => removeUser(user.id)}>Usuń</button>
        </div>
      ))}
    </div>
  );
}

export default UsersList;