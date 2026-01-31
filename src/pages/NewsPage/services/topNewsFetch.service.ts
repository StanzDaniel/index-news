import { API } from '@/models';
import axios from 'axios';

async function topNewsFetch(value: {}) {
  const data = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=${value}`,
    { headers: { 'x-api-key': API.KEY } }
  );

  return data;
}
export default topNewsFetch;
