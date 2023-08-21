import express from 'express';
import { connect } from 'mongoose';
import { deleteUser } from './midlewares/delete.midleware.js';
import { isAuthenticated } from './midlewares/isAuthenticated.midleware.js';
import { loginUser } from './midlewares/login.midleware.js';
import { registerUser } from './midlewares/register.midleware.js';
import { updateUser } from './midlewares/update.midleware.js';
import { SECRET } from './models/secret.model.js';
import { auth } from './utilities/auth.utility.js';
import { error } from './utilities/error.utility.js';
import { loginValidation } from './validators/login.validator.js';
import { registerValidation } from './validators/register.validator.js';
import { updateValidation } from './validators/update.validator.js';
import { changePasswordValidation } from './validators/changePassword.validator.js';
import { changePassword } from './midlewares/changePassword.midleware.js';
import cors from 'cors';
import { returnUser } from './midlewares/returnUser.midleware.js';

const app = express();

app.use(cors())

app.use(express.json());


await connect(SECRET.BD_CREDENTIALS)

app.use(auth); // access control

app.post('/register', registerValidation, registerUser);
app.post('/login', loginValidation, loginUser);
app.post('/validate', isAuthenticated, returnUser)
app.post('/deleteuser', isAuthenticated, deleteUser);
app.post('/updateuser', isAuthenticated, updateValidation, updateUser);
app.post('/changepassword', isAuthenticated, changePasswordValidation, changePassword);

app.use(error)

app.listen(3000, () => console.log("connected"));
