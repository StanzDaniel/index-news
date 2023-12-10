import { RESPONSE_ADAPTER } from '@/adapters';
import { User } from '@/interfaces';
import { database } from '@/models';
import axios from 'axios';

export const updateUser = async (
  data: Partial<User>,
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const token = document.cookie.replace("token=", "");

  try {
    const response = await axios.post(database.UPDATE_USER, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Key': database.ACCESS_KEY,
        'Authorization': token,
      },
    });
    if (response.status === RESPONSE_ADAPTER.OK) {
      setIsUpdated(true);
      console.log("OK")
      return;
    }
  } catch (error: any) {
    console.log({ ERROR: error.message });
  }
};
