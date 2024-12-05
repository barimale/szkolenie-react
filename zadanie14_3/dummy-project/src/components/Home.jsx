import { Link } from 'react-router';

const Home = () =>{
    return(
        <>
            <h1>This is home</h1>
            <nav>
                <Link style={{margin: '10px 10px'}} to={''}>Home</Link>
                <Link style={{margin: '10px 10px'}} to={'contact'}>Contact</Link>
                <Link style={{margin: '10px 10px'}} to={'about'}>About</Link>
            </nav>
        </>
    );
}

export default Home;