import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type User = {
  name: string,
  jwt: string
}

export type UserSliceState = {
  user: User | null
}

const initialState = {
  user: null
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state: UserSliceState, action: PayloadAction<User|null>) => {
      state.user = action.payload
    }
  }
});

export const { setUser } = userSlice.actions; // actions

export default userSlice.reducer; // reducer