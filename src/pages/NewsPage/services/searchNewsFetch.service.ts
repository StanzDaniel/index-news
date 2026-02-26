import { API } from '@/models';
import axios from 'axios';

function searchNewsFetch(search: {}) {
  const data = axios.get(
    `https://api.currentsapi.services/v1/search?keywords=${search}&language=es&apiKey=${API.KEY}`,
    // { headers: { 'x-api-key': API.KEY } }
  );

  return data;
}
export default searchNewsFetch;
