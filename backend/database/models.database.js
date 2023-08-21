import { model } from "mongoose";

export const User = model("User", {
  name: String,
  lastName: String,
  userName: String,
  email: String,
  password: String,
  salt: String,
  image: String,
})
