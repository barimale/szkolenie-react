import { useState, useEffect } from 'react';

const Filters = () => {
    const [filteredGenre, setFilteredGenre] = useState(undefined);
    const [filteredType, setFilteredType] = useState(undefined);
    const [filteredScore, setFilteredScore] = useState(undefined);

    useEffect(() => {
        console.log(filteredGenre);
    }, [filteredGenre]);

    useEffect(() => {
        console.log(filteredType);
    }, [filteredType]);

    useEffect(() => {
        console.log(filteredScore);
    }, [filteredScore]);

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;

        if (name === 'genre') {
            setFilteredGenre(target.value);
        } else if (name === 'type') {
            setFilteredType(target.value);
        } else if (name === 'score') {
            setFilteredScore(target.value);
        }
    };


    return (
        <div>
            <p>genre</p>
            <label htmlFor="genre">Gatunek</label>
            <select
                type="select"
                id="genre"
                name="genre"
                placeholder="Gatunek"
                onChange={handleInputChange}
                value={filteredGenre}
            >
                <option value="">Wybierz</option>
                <option value="Komedia">Komedia</option>
                <option value="Dramat">Dramat</option>
                <option value="Akcja">Akcja</option>
            </select>
            <p>type</p>
            <label htmlFor="type">Typ</label>
            <select
                type="select"
                id="type"
                name="type"
                placeholder="Typ"
                onChange={handleInputChange}
                value={filteredType}
            >
                <option value="">Wybierz</option>
                <option value="movie">Film</option>
                <option value="series">Serial</option>
            </select>
            <p>score</p>
            <label htmlFor="score">Ocena</label>
            <input
                type="number"
                id="score"
                name="score"
                placeholder="Ocena"
                onChange={handleInputChange}
                value={filteredScore}
            />
        </div>
    )
}

export default Filters;