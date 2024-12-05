import { useState, useEffect } from 'react'
import { createSearchParams, useNavigate } from "react-router"

const ButtonFilters = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const searchParams = createSearchParams({
            category: selectedCategory,
        })

        const goToCallback = (items) => {
            navigate(`/products?${items}`)
        }

        goToCallback(searchParams);
    }, [selectedCategory]);

    return (
        <>
            <p>Filtruj poprzez przycisk:</p>
            <button onClick={(() => { setSelectedCategory('laptops') })}>Pokaż Laptopy</button>
            <button onClick={(() => { setSelectedCategory('smartphones') })}>Pokaż Smartfony</button>
            <button onClick={(() => { setSelectedCategory('tablets') })}>Pokaż Tablety</button>
            <button onClick={(() => { setSelectedCategory('') })}>Skasuj filtr</button>
        </>
    );
}

export default ButtonFilters;