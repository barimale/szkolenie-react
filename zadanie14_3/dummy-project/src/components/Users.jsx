import { Link } from 'react-router';

const Users = () => {
    return (
        <>
            <h1>This is users</h1>
            <nav>
                <Link to={'/admin'}>Wróć do Home</Link>
            </nav>
        </>
    );
}

export default Users;