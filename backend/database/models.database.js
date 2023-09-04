import { Schema, model } from "mongoose";

const newsSchema = new Schema({
  source: {
    id: String,
    name: String
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String
});

export const User = model("User", {
  name: String,
  lastName: String,
  userName: String,
  email: String,
  password: String,
  salt: String,
  image: String,
  history: [newsSchema],
  readLater: [newsSchema],
})