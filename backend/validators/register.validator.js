import { body } from "express-validator";
import { validateResults } from "../utilities/validateResults.utility.js";
import { User } from "../database/models.database.js";

export const registerValidation = [
  body('name').exists().trim().notEmpty().isString().escape(),
  body('lastName').exists().trim().notEmpty().isString().escape(),
  body('userName').exists().trim().notEmpty().isString().escape(),
  body('age').exists().isNumeric().notEmpty(),
  body('email')
    .exists()
    .notEmpty()
    .toLowerCase()
    .isEmail()
    .withMessage('Not a valid e-mail address')
    .trim()
    .escape()
    .custom(async value => {
      const existingUser = await User.findOne({email: value});
      if (existingUser) {
        throw new Error('A user already exists with this e-mail address');
      }
      return true;
    }),
  body('password')
    .exists()
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage('Your password must contain at least 8 characters ')
    .trim()
    .escape(),
  body('passwordConfirmation').custom((value, { req }) => {
    return value === req.body.password;
  }),
  body('image').optional(),
  (req, res, next) => {
    validateResults(req, res, next);
  }
];