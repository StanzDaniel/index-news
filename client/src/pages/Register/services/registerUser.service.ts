import { RESPONSE_ADAPTER } from '@/adapters';
import { User } from '@/interfaces';
import { database } from '@/models';
import axios from 'axios';

export const registerUser = async (
  data: User,
  setEmailError: React.Dispatch<React.SetStateAction<string>>,
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const response = await axios.post(database.REGISTER, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Key': database.ACCESS_KEY
      },
    });
    if (response.status === RESPONSE_ADAPTER.CREATED) {
      setIsRegistered(true);
      return;
    }
  } catch (error: any) {
    if (error.response.status === RESPONSE_ADAPTER.BAD_REQUEST) {
      setEmailError(error.response.data);
      return;
    }
    console.log({ ERROR: error.message });
  }
};
