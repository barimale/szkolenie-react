import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type User = {
  name: string,
  jwt: string
}

type UserSliceState = {
  user: User | null
}

const initialState = {
  user: null
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state: UserSliceState, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  }
});

export const { setUser } = userSlice.actions; // actions

export default userSlice.reducer; // reducer