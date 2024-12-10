import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'task',
  initialState: [
    { id: Date.now() + 1, text: 'Do', state: 'in progress' },
    { id: Date.now() + 2, text: 'Did', state: 'done' },
    { id: Date.now() + 3, text: 'Done', state: 'in progress' }
  ],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, state: 'in progress' })
    },
    removeTask: (state, action) => {
      return state.filter(product => product.id !== action.payload)
    },
    toggleDone: (state, action) => {
      const index = state.findIndex(p => p.id === action.payload);
      let toggled = state.find(p => p.id === action.payload);
      toggled.state = toggled.state === 'in progress' ? 'done' : 'in progress';
      state[index] = toggled;
      return state;
    }
  }
});

export const { addTask, removeTask, toggleDone } = taskSlice.actions; // actions

export default taskSlice.reducer; // reducer