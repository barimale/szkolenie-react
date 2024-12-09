import { useItems } from '../contexts/CartContext';

const ItemCount = () =>{
    const {count} = useItems();

    return (
        <>
        <p>Items count: {count()}</p>
        </>
    )
}

export default ItemCount;