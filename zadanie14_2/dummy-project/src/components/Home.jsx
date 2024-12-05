import Filters from './Filters';
import { useSearchParams } from 'react-router';
import { useState, useEffect } from 'react'
const Home = (props) => {
    const [searchParams] = useSearchParams()
    const filteredCategory = searchParams.get('category');
    const [filteredProducts, setFilteredProducts] = useState(props.products);

    useEffect(() => {
        const filtered = props.products
            .filter(p => p.category === filteredCategory);

        setFilteredProducts(filtered);
    }, [filteredCategory]);

    return (
        <>
            <p>Category: {searchParams.get('category')}</p>
            {filteredProducts.map((item, index) => {
                return <p key={index}>{JSON.stringify(item)}</p>
            })}
            <Filters />
        </>
    );
}

export default Home;