import { API } from '@/models';
import axios from 'axios';

async function topNewsFetch(value: {}) {
  const data = await axios.get(
    `https://api.currentsapi.services/v1/search?category=${value}&language=es&apiKey=${API.KEY}`,
    // { headers: { 'x-api-key': API.KEY } }
  );

  return data;
}
export default topNewsFetch;
