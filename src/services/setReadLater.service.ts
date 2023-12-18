import { News } from "@/interfaces";
import { database } from "@/models";
import axios from "axios";

export const setReadLater = async (card: News) => {
  const token = document.cookie.replace("token=", "");

  const news = {news: card};

  try {
    await axios.post(database.READ_LATER, JSON.stringify(news), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Key': database.ACCESS_KEY,
        'Authorization': token,
      },
    });
  } catch (error: any) {
    console.log({ ERROR: error.message });
  }
}