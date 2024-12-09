import React, { createContext, useState, useContext, useEffect } from 'react'
 
const CartContext = createContext()
 
export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0);

    const addItem = (item, price) => {
        setItems(prevItems => [...prevItems, { id: Date.now(), name: item, price: Number(price) }])
    }
 
    const removeItem = id => {
        setItems(prevItems => prevItems.filter(n => n.id !== id))
    }

    useEffect(()=>{
        setTotal(items.map(d => d.price).reduce((a, b) => a + b, 0));
    }, [items])

    const count = () =>{
        return items.length;
    }

    const totalPrice = () =>{
        return total;
    }
 
    return (
        <CartContext.Provider value={{ items, addItem, removeItem, count, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}
 
export const useItems = () => useContext(CartContext)