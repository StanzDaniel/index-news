import express from "express";
import { expressjwt } from "express-jwt"
import { SECRET } from "../models/secret.model.js";
import { User } from "../database/models.database.js";

export const validateJwt = expressjwt({secret: SECRET.JWT, algorithms: ['HS256']});

const assignUser = async (req, res, next) => {
  try {
      const id = req.auth;
      const user = await User.findById(id);
      if (!user) return res.sendStatus(500);
      req.user = user;
      next();
  } catch (error) {
    next(error);
  }
};


export const isAuthenticated = express.Router().use(validateJwt, assignUser);