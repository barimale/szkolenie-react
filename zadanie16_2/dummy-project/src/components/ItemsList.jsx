import { useItems } from "../contexts/CartContext";

const ItemsList = () => {
    const {items, removeItem} = useItems();
 
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={{border: '1px solid black', margin: '10px', width: '300px'}}>
          <p style={{padding: '10px'}}>Name: <b>{item.name}</b></p>
          <p style={{padding: '10px'}}>Price: <b>{item.price}</b></p>
          <button style={{margin: '10px'}} onClick={() => removeItem(item.id)}>Usuń</button>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;