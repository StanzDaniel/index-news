import { API_KEY } from "@/models"
import axios from "axios"

async function callAPI() {

  const data = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=324fbc41233c45e9a014f6936c9001d8");

  return data
}
export default callAPI