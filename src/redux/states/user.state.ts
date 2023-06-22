import { User } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const userEmptyState: User = {
  name: '',
  email: '',
  password: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: userEmptyState,
  reducers: {
    createUser: (state, action) => action.payload,
    updateUser: (state, action) => ({...state, ...action.payload}),
    deleteUser: () => userEmptyState,
  },
})

export const {createUser, updateUser, deleteUser} = userSlice.actions;

export default userSlice.reducer;