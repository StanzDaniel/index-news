import { RESPONSE_ADAPTER } from "@/adapters";
import { User } from "@/interfaces";
import { database } from "@/models";
import axios from "axios";

export const loginUser = async (
  data: Partial<User>,
  setEmailError: React.Dispatch<React.SetStateAction<string>>,
  setPasswordError: React.Dispatch<React.SetStateAction<string>>,
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
) => {
  try {
    const response = await axios.post(database.LOGIN, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Key': database.ACCESS_KEY
      },
    });
    if (response.status === RESPONSE_ADAPTER.OK) {
      setUser(response.data);
    }
  } catch (error: any) {
    if (error.code === RESPONSE_ADAPTER.ERR_NETWORK){
      console.log({ ERROR: error.message });
      return;
    }
    switch (error.response.status) {
      case RESPONSE_ADAPTER.UNAUTHORIZED: {
        setPasswordError(error.response.data);
        break;
      }
      case RESPONSE_ADAPTER.BAD_REQUEST: {
        setEmailError(error.response.data);
        break;
      }
      default: {
        console.log({ ERROR: error.response.data });
        break;
      }
    }
  }
};