import { News } from "@/interfaces";
import { database } from "@/models";
import axios from "axios";

export const setHistory = async (card: News) => {
  const token = document.cookie.replace("token=", "");

  const news = {news: card};

  try {
    await axios.post(database.HISTORY, JSON.stringify(news), {
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