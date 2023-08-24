import { User } from "@/interfaces";
import { loginUser } from "@/pages/Login/services";
import { validateToken } from "@/services";

import { createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export const userEmptyState: User = {
  name: '',
  lastName: '',
  userName: '',
  email: '',
  password: '',
  image: '',
  token: '',
}


export const userSlice = createSlice({
  name: 'user',
  initialState: userEmptyState,
  reducers: {
    loadUser: (state, action) => {
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