import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const customerSlice = createSlice({
  name: 'customer',
  initialState: [],
  reducers: {
    login: (state: any, action: any) => {
      axios.post('https://crm-app-akademia108-bf1127afa289.herokuapp.com/auth/login', {
        email: action.payload.email,
        password: action.payload.password
    })
        .then(p => {
            state.jwt = p.data.jwt;
            localStorage.setItem('authToken', p.data.jwt)
        })
        .catch(error => {
          state.error = error.message;
        })
    }
  }
});

export const { login } = customerSlice.actions; // actions

export default customerSlice.reducer; // reducer