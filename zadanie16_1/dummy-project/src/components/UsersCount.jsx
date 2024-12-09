import { useUsers } from '../contexts/UsersContext';

const UsersCount = () =>{
    const {count} = useUsers();

    return (
        <>
        <p>Users count: {count()}</p>
        </>
    )
}

export default UsersCount;