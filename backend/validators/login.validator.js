import { body } from "express-validator";
import { validateResults } from "../utilities/validateResults.utility.js";
import { User } from "../database/models.database.js";

export const loginValidation = [
  body('email')
    .exists()
    .trim()
    .notEmpty()
    .toLowerCase()
    .isEmail()
    .withMessage('Not a valid e-mail address')
    .escape()
    .custom(async value => {
      const existingUser = await User.findOne({ email: value });
      if (!existingUser) {
        throw new Error(
          'You are not a registered user. Please confirm your email address or sign up!'
        );
      }
      return true;
    }),
  body('password')
    .exists()
    .trim()
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage('Your password must contain at least 8 characters ')
    .escape(),
  (req, res, next) => validateResults(req, res, next),
];