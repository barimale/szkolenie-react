import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'task',
  initialState: [
    { id: Date.now() + 1, text: 'Do', isDone: true },
    { id: Date.now() + 2, text: 'Did', isDone: false },
    { id: Date.now() + 3, text: 'Done', isDone: false }
  ],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, isDone: false })
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload)
    },
    toggleDone: (state, action) => {
      const task = state.find(t => t.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    }
  }
});

export const { addTask, removeTask, toggleDone } = taskSlice.actions; // actions

export default taskSlice.reducer; // reducer