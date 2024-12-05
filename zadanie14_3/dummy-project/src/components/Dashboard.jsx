import { Link } from 'react-router';

const Dashboard = () =>{
    return(
        <>
            <h1>This is dashboard</h1>
            <nav>
                <Link to={'/admin'}>Dashboard</Link>
                <Link to={'/admin/users'}>Users</Link>
                <Link to={'/admin/settings'}>Settings</Link>
            </nav>
        </>
    );
}

export default Dashboard;