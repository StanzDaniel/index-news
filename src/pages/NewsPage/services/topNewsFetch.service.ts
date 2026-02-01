import { API } from '@/models';
import axios from 'axios';

async function topNewsFetch(value: {}) {
  const data = await axios.get(
    `/.netlify/functions/news?category=${value}`,
    // { headers: { 'x-api-key': API.KEY } }
  );

  return data;
}
export default topNewsFetch;
