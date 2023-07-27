import jwt from "jsonwebtoken";
import { SECRET } from "../models/secret.model.js";

export const auth = (req, res, next) => {
  const accessKey = req.header("Access-Key");
  if (accessKey !== SECRET.ACCESS_KEY) {
    res.status(403).send("403 Forbidden - access denied");
  }
  next();
};

export const signToken = (value) => {
  const signed = jwt.sign(value, SECRET.JWT);
  return signed;
}