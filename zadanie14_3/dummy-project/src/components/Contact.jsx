import { Link } from 'react-router';

const Contact = () =>{
    return(
        <>
            <h1>This is contact</h1>
            <nav>
                <Link to={'/'}>Wróć do Home</Link>
            </nav>
        </>
    );
}

export default Contact;