import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'task',
  initialState: [
    { id: Date.now() + 1, text: 'Do', isDone: true },
    { id: Date.now() + 2, text: 'Did', isDone: false },
    { id: Date.now() + 3, text: 'Done', isDone: false }
  ],
  reducers: {
    addTask: (state: any, action: any) => {
      state.push({ id: Date.now(), text: action.payload, isDone: false })
    },
    removeTask: (state: any, action: any) => {
      return state.filter((task: any) => task.id !== action.payload)
    },
    toggleDone: (state: any, action: any) => {
      const task = state.find((t: any) => t.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    }
  }
});

export const { addTask, removeTask, toggleDone } = taskSlice.actions; // actions

export default taskSlice.reducer; // reducer