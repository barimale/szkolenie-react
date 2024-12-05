import { Link } from 'react-router';

const Home = () =>{
    return(
        <>
            <h1>This is home</h1>
            <nav>
                <Link to={''}>Home</Link>
                <Link to={'contact'}>Contact</Link>
                <Link to={'about'}>About</Link>
            </nav>
        </>
    );
}

export default Home;