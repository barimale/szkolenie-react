import { Link } from 'react-router';

const Dashboard = () =>{
    return(
        <>
            <h1>This is dashboard</h1>
            <nav style={{display: 'flex'}}>
                <Link style={{margin: '10px 10px'}} to={'/admin'}>Dashboard</Link>
                <Link style={{margin: '10px 10px'}} to={'/admin/users'}>Users</Link>
                <Link style={{margin: '10px 10px'}} to={'/admin/settings'}>Settings</Link>
            </nav>
        </>
    );
}

export default Dashboard;