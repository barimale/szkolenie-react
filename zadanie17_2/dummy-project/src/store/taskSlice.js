import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'task',
  initialState: [
    {id: Date.now() + 1, text: 'Do', state: 'ready'},
    {id: Date.now() + 2, text: 'Did', state: 'ready'},
    {id: Date.now() + 3, text: 'Done', state: 'ready'}
  ],
  reducers: {
    addTask: (state, action) => {
      state.push({id: Date.now(), text: action.payload})
    },
    removeTask: (state, action) => {
      return state.filter(product => product.id !== action.payload)
    },
    done: (state, action) =>{
      // WIP ? 
    }
  }
});

export const { addTask, removeTask, done } = taskSlice.actions; // actions

export default taskSlice.reducer; // reducer