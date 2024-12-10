import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct } from '../store/productSlice'
 
const ProductsList = () => {
  const product = useSelector(state => state.product)
  const dispatch = useDispatch()
  const [productName, setProductName] = useState('')
 
  return (
    <div>
      <h2>Products List</h2>
      <div>
        <input
          type="text"
          value={productName}
          onChange={e => setProductName(e.target.value)}
          placeholder="Add a new product"
        />
        <button onClick={() => {
          dispatch(addProduct(productName))
          setProductName('')
        }}>
          Add
        </button>
      </div>
      <ul>
        {product.map(product => (
          <li key={product.id}>
            {product.text}
            <button onClick={() => dispatch(removeProduct(product.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
 
export default ProductsList