
import { User } from '@/interfaces';
import { database } from '@/models';
import axios from 'axios';

export const validateToken = (
  token: string,
  setState: React.Dispatch<React.SetStateAction<User | undefined>>
) => {
  axios
    .post(database.VALIDATE_TOKEN, null, {
      headers: {
        'Access-Key': database.ACCESS_KEY,
        'Authorization': token,
      },
    })
    .then(res => res)
    .then(user => {
      const newUser = user.data      
      setState(newUser);
    })
    .catch(err => {
      console.error(err.message);
      document.cookie = `token=; max-age=0;`;
    });
};
