import { User } from "../database/models.database.js";
import { encrypt } from "../utilities/crypt.utility.js";

export const registerUser = async (req, res) => {
  const { body } = req;
  try {
    const {salt, hash } = await encrypt(body.password);

    await User.create({
      name: body.name,
      lastName: body.lastName,
      userName: body.userName,
      email: body.email,
      age: body.age,
      image: body.image,
      password: hash,
      salt: salt
    });
    
    return res.sendStatus(201);
  } catch (error) {
      res.status(400).send(`400 Bad Request - ${error.message}`);
  }
};