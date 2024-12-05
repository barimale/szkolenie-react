import { Link } from 'react-router';

const Settings = () =>{
    return(
        <>
            <h1>This is settings</h1>
            <nav>
                <Link to={'/admin'}>Wróć do Home</Link>
            </nav>
        </>
    );
}

export default Settings;