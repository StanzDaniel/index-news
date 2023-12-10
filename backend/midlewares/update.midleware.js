import { User } from "../database/models.database.js";

export const updateUser = async (req, res) => {
  const newUser = req.body;
  const { email } = req.user;
  try {
      await User.findOneAndUpdate({email: email}, newUser);
      res.sendStatus(200);
  } catch (error) {
      res.status(400).send(`400 Bad Request - ${error.message}`);
  }
}