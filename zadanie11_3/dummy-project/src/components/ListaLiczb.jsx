import { useState, useEffect, useMemo } from 'react';

const ListaLiczb = () => {
    const [liczby, setLiczby] = useState([1, 2, 3, 4, 5]);
    const [newNumber, setNewNumber] = useState(undefined);

    const sum = (items) => {
        const result = items.reduce((total, currentValue) => total = total + currentValue, 0);
        return result;
    }

    const cachedValue = useMemo(() => sum(liczby), [liczby]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const asNumber = Number(newNumber);
        if (Number.isInteger(asNumber)) {
            setLiczby(() => [...liczby, asNumber]);
        }
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
            <p>Suma: {cachedValue}</p>
            <form onSubmit={handleSubmit} style={{ margin: '5px 20px' }}>
                <label htmlFor="number" style={{ margin: '5px 10px' }}>Dodaj liczbe: </label>
                <input
                    type="text"
                    id="number"
                    name="number"
                    placeholder="liczba"
                    onChange={handleInputChange}
                    value={newNumber}
                />
                <button style={{ margin: '5px 20px' }} type="submit">Dodaj</button>
            </form>
        </>
    );
}

export default ListaLiczb;