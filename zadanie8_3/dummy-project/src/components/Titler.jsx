import { useState, useEffect } from 'react';

const Titler = (props) => {
    const initialTitle = props.InitialTitle ? props.InitialTitle : 'Tytuł domyślny';
    const [title, setTitle] = useState(initialTitle);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <button onClick={()=>{setTitle('Strona główna')}}>Strona główna</button>
            <button onClick={()=>{setTitle('O mnie')}}>O mnie</button>
            <button onClick={()=>{setTitle('Kontakt')}}>Kontakt</button>
        </>
    );
}

export default Titler;
