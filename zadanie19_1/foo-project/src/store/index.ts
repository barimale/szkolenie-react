import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './customerSlice'

export const store = configureStore({
  reducer: {
    customer: taskReducer
  }
})