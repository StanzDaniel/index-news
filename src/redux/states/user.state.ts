import { User } from "@/interfaces";

import { createSlice } from "@reduxjs/toolkit";

export const userEmptyState: User = {
  name: '',
  lastName: '',
  userName: '',
  email: '',
  password: '',
  image: '',
  token: '',
  history: [],
  readLater: [],
}


export const userSlice = createSlice({
  name: 'user',
  initialState: userEmptyState,
  reducers: {
    loadUser: (state, action) => {
      document.cookie = `token=${action.payload.token}; path=/;`;
      return action.payload;
    },
    updateUser: (state, action) => ({...state, ...action.payload}),
    logoutUser: () => {
      //eliminar cookie token
      document.cookie = `token=; max-age=0; path=/;`; 
      return userEmptyState;
    }
  },
})

export const {loadUser, updateUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;