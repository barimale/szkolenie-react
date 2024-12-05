import { useState, useEffect } from 'react'
import { createSearchParams, useNavigate } from "react-router"

const Filters = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const searchParams = createSearchParams({
            category: selectedCategory,
        })
     
        const goToCallback = (items) => {
            navigate(`/products?${items}`)
        }

        goToCallback(searchParams);
    },[selectedCategory]);

    return (
        <>
            <label htmlFor="category">
                Filtruj:
                <select id={'category'} value={selectedCategory} onChange={e => {setSelectedCategory(e.target.value)}}>
                    <option value="">Wybierz...</option>
                    <option value="laptops">Laptopy</option>
                    <option value="smartphones">Smartfony</option>
                    <option value="tablets">Tablety</option>
                </select>
            </label>
        </>
    );
}

export default Filters;