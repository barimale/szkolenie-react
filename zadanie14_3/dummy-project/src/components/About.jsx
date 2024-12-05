import { Link } from 'react-router';

const About = () =>{
    return(
        <>
            <h1>This is about</h1>
            <nav>
                <Link to={'/'}>Wróć do Home</Link>
            </nav>
        </>
    );
}

export default About;