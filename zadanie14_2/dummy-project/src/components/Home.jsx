import ButtonFilters from './ButtonFilters';
import { useSearchParams } from 'react-router';
import { useState, useEffect } from 'react'

const Home = (props) => {
    const [searchParams] = useSearchParams()
    const filteredCategory = searchParams.get('category');
    const [filteredProducts, setFilteredProducts] = useState(props.products);

    useEffect(() => {
        if (filteredCategory === '') {
            setFilteredProducts(props.products);
        } else {
            const filtered = props.products
                .filter(p => p.category === filteredCategory);

            setFilteredProducts(filtered);
        }

    }, [filteredCategory]);

    return (
        <>
            <p>Przedmioty: {searchParams.get('category')}</p>
            {filteredProducts.map((item, index) => {
                return (
                    <div key={index} style={{ border: '1px solid black' }}>
                        <p >ID: {item.id}</p>
                        <p >Nazwa: {item.name}</p>
                        <p >Kategoria: {item.category}</p>
                    </div>);
            })}
            <ButtonFilters />
        </>
    );
}

export default Home;