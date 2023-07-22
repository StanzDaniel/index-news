import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  }
})

export default store;