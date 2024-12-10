import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'task',
  initialState: [
    {id: Date.now() + 1, text: 'Do', state: 'ready'},
    {id: Date.now() + 2, text: 'Did', state: 'done'},
    {id: Date.now() + 3, text: 'Done', state: 'ready'}
  ],
  reducers: {
    addTask: (state, action) => {
      state.push({id: Date.now(), text: action.payload, state: 'ready'})
    },
    removeTask: (state, action) => {
      return state.filter(product => product.id !== action.payload)
    },
    toggleDone: (state, action) =>{
      const toggledIndex = state.findIndex(p => p.id === action.payload);
      let toggled = state.find(p => p.id === action.payload);
      toggled.state = toggled.state === 'ready' ? 'done' : 'ready';
      state[toggledIndex] = toggled;
      return state;
    }
  }
});

export const { addTask, removeTask, toggleDone } = taskSlice.actions; // actions

export default taskSlice.reducer; // reducer