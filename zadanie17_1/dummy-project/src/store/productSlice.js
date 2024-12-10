import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'product',
  initialState: [
    {id: Date.now() + 1, text: 'Doe'},
    {id: Date.now() + 2, text: 'Joe'},
    {id: Date.now() + 3, text: 'foo bar'}
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push({id: Date.now(), text: action.payload})
    },
    removeProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload)
    }
  }
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;