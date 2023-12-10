import { database } from "@/models";
import axios from "axios";

export const uploadImage = async (image: File) => {
  const formData = new FormData();
  if (image) {
    formData.append('file', image);
  }

  const token = document.cookie.replace('token=', '');

  try {
    await axios.post(database.IMAGE, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Key': database.ACCESS_KEY,
        Authorization: token,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};
