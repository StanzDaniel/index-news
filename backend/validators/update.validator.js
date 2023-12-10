import { body } from "express-validator";
import { validateResults } from "../utilities/validateResults.utility.js";

export const updateValidation = [
  body('name').optional().exists().trim().notEmpty().isString().escape(),
  body('lastName').optional().exists().trim().notEmpty().isString().escape(),
  body('userName').optional().exists().trim().notEmpty().isString().escape(),
  body('age').optional().exists().isNumeric().notEmpty(),
  body('email').not().exists(),
  body('password').not().exists(),
  body('image').optional(),
  (req, res, next) => validateResults(req, res, next),
];