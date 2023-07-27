import { model } from "mongoose";

export const User = model("User", {
  name: String,
  lastName: String,
  userName: String,
  age: Number,
  email: String,
  password: String,
  salt: String,
  image: String,
})
