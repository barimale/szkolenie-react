import { useState, useEffect } from 'react';
import "./Movie.css";

const Filters = (props) => {
    const [filteredGenre, setFilteredGenre] = useState(undefined);
    const [filteredType, setFilteredType] = useState(undefined);
    const [filteredScore, setFilteredScore] = useState(undefined);

    useEffect(() => {
        props.onFiltersChanged(() => {
            return { genre: filteredGenre, type: filteredType, score: filteredScore }
        });
    }, [filteredGenre, filteredType, filteredScore]);

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;

        setFilteredGenre(name === 'genre' ? target.value : undefined);
        setFilteredType(name === 'type' ? target.value : undefined);
        setFilteredScore(name === 'score' ? target.value : undefined);
    };

    return (
        <div className="filterlist">
            <label htmlFor="genre">Gatunek: </label>
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
            <button style={{ margin: '5px 20px' }} onClick={() => {
                setFilteredGenre('')
            }}>Wyczyść gatunek</button>
            <br />
            <label htmlFor="type">Typ: </label>
            <select
                type="select"
                id="type"
                name="type"
                placeholder="Typ"
                onChange={handleInputChange}
                value={filteredType}
            >
                <option value="">Wybierz</option>
                <option value="movies">Film</option>
                <option value="series">Serial</option>
            </select>
            <button style={{ margin: '5px 20px' }} onClick={() => {
                setFilteredType('')
            }}>Wyczyść typ</button>
            <br />
            <label htmlFor="score">Ocena: </label>
            <input
                type="number"
                id="score"
                name="score"
                placeholder="Ocena"
                onChange={handleInputChange}
                value={filteredScore}
                min={1}
                max={10}
            />
            <button style={{ margin: '5px 20px' }} onClick={() => {
                setFilteredScore('')
            }}>Wyczyść ocenę</button>
        </div>
    )
}

export default Filters;