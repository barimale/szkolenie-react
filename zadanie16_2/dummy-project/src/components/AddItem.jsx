import { useItems } from '../contexts/CartContext';

const AddItem = () =>{
    const { addItem } = useItems()
 
  const handleAdd = () => {
    const message = prompt('Enter item name: ')
    const price = prompt('Enter price: ')
    if (message && price) {
      addItem(message, price)
    }
  }
 
  return <button onClick={handleAdd}>Add Item</button>
}

export default AddItem;