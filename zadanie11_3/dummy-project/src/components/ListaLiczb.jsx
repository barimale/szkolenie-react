import { useState, useEffect } from 'react';

const ListaLiczb = () => {
    const [liczby, setLiczby] = useState([1, 2, 3, 4, 5]);
    const [newNumber, setNewNumber] = useState(undefined);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLiczby(()=> [...liczby, Number(newNumber)]);
    };

    const handleInputChange = (e) => {
        const target = e.target;

        setNewNumber(() => {
            return target.value;
        });
    }

    return (
        <>
            <p>{JSON.stringify(liczby)}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="number">Dodaj liczbe: </label>
                <input
                    type="text"
                    id="number"
                    name="number"
                    placeholder="liczba"
                    onChange={handleInputChange}
                    value={newNumber}
                />
                <button type="submit">Dodaj</button>
            </form>
        </>
    );
}

export default ListaLiczb;