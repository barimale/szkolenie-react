import Filters from './Filters';
import ButtonFilters from './ButtonFilters';
import { useSearchParams } from 'react-router';
import { useState, useEffect } from 'react'

const Home = (props) => {
    const [searchParams] = useSearchParams()
    const filteredCategory = searchParams.get('category');
    const [filteredProducts, setFilteredProducts] = useState(props.products);

    useEffect(() => {
        if(filteredCategory === '')
        {
            setFilteredProducts(props.products);
        }else{
            const filtered = props.products
                .filter(p => p.category === filteredCategory);

            setFilteredProducts(filtered);
        }
        
    }, [filteredCategory]);

    return (
        <>
            <p>Kategoria: {searchParams.get('category')}</p>
            {filteredProducts.map((item, index) => {
                return <p key={index}>{JSON.stringify(item)}</p>
            })}
            {/* <Filters /> */}
            <ButtonFilters />
        </>
    );
}

export default Home;