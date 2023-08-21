import jwt from "jsonwebtoken";
import { SECRET } from "../models/secret.model.js";

export const auth = (req, res, next) => {
  console.log({REQ: req})
  const accessKey = req.header("Access-Key");
  if (accessKey !== SECRET.ACCESS_KEY) {
    console.log({Access_denied: accessKey});
    return res.sendStatus(403);
  }
  console.log("Access granted");
  next();
};

export const signToken = (value) => {
  const signed = jwt.sign(value, SECRET.JWT);
  return signed;
}