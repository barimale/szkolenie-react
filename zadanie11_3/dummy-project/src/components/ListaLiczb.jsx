import { useState, useEffect, useMemo } from 'react';

const ListaLiczb = () => {
    const [liczby, setLiczby] = useState([1, 2, 3, 4, 5]);
    const [newNumber, setNewNumber] = useState(undefined);
    const [suma, setSuma] = useState(undefined);

    const Sum = () =>{
        const result = liczby.reduce((total, currentValue) => total = total + currentValue,0);
        console.log(result);
    }

    const cachedValue = useMemo(() => Sum(), liczby)

    useEffect(()=>{
        setSuma(cachedValue);
    }, [cachedValue]);

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
            <p>Suma: {suma}</p>
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