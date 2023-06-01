import axios from "axios";

async function topNewsFetch(value: {}) {

  const data = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${value}`);

  return data
}
export default topNewsFetch