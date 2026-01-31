import { API } from '@/models';
import axios from 'axios';

function searchNewsFetch(search: {}) {
  const data = axios.get(
    `https://newsapi.org/v2/everything?q=${search}&language=es`,
    { headers: { 'x-api-key': API.KEY } }
  );

  return data;
}
export default searchNewsFetch;
