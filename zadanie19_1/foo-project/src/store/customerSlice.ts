import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    error: '',
    jwt: '',
    customers: []
  },
  reducers: {
    login: (state: any, action: any): void => {
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
    },
    signUp: (state: any, action: any): void => {
      axios.post('https://crm-app-akademia108-bf1127afa289.herokuapp.com/auth/signup', {
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name
      })
        .then(p => {
          console.log(JSON.stringify(p.data))
        })
        .catch(error => {
          state.error = error.message;
        })
    }
  }
});

export const { login, signUp } = customerSlice.actions; // actions

export default customerSlice.reducer; // reducer