import { useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const LocalStorageComponent = () =>{
    const [save, load] = useLocalStorage();
    const [name, setName] = useState('');

    const handleInputChange = (e) => {
        const target = e.target;
        setName(() => target.value);
    }

    useEffect(()=>{
        const result = load('name');
        setName(result);
    }, []);

    useEffect(()=>{
        save('name', name);
    }, [name]);

    return (
        <>
        <p>{name}</p>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Tytuł"
          onChange={handleInputChange}
          value={name}
        />
        </>
    );
}

export default LocalStorageComponent;