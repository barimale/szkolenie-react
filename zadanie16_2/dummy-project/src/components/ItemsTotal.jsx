import { useItems } from '../contexts/CartContext';

const ItemsTotal = () =>{
    const {totalPrice} = useItems();

    return (
        <>
        <p>Items total price: {totalPrice()} USD</p>
        </>
    )
}

export default ItemsTotal;