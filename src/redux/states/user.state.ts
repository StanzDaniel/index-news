import { User } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

export const userEmptyState: User = {
  name: '',
  email: '',
  password: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: JSON.parse(localStorage.getItem('user') || '{}' ) || userEmptyState,
  reducers: {
    createUser: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      return action.payload;
    },
    updateUser: (state, action) => ({...state, ...action.payload}),
    logoutUser: () => {
      localStorage.clear();
      return userEmptyState;
    }
  },
})

export const {createUser, updateUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;