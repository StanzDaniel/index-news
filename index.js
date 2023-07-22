import express from 'express';
import mongoose from 'mongoose';

const app = express();

await mongoose.connect("mongodb+srv://Daniel:Braniac3@cluster0.yco54rq.mongodb.net/?retryWrites=true&w=majority")

const User = mongoose.model("User", {
  name: String,
  lastName: String,
  userName: String,
  email: String,
  age: Number,
  image: String,
  password: String,
})

async function createUser() {
  const user = new User({
    name: 'Daniel',
    lastName: 'Stanziola',
    userName: 'Admin',
    email: 'stanzioladaniel@gmail.com',
    age: 23,
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngmart.com%2Fes%2Fimage%2F330679&psig=AOvVaw06c66ru5Lu6xbWxlVetuOT&ust=1690076156583000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDI9cCWoYADFQAAAAAdAAAAABAE',
    password: 'Braniac3'
  });
  const createdUser = await user.save();
  console.log({'SUCCESS': createdUser})
  return createdUser;
}

async function findUser(value) {
  const user = await User.findOne( { userName: value } );
  console.log(user);
}

app.get('/createuser', (req, res) => {
  const user = createUser();
  res.send(`Hello New User! ${user}`);
})

app.listen(3000, () => console.log("connected"));

findUser("Admin");