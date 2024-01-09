import { API } from '@/models';
import axios from 'axios';

function searchNewsFetch(search: {}) {
  const data = axios.get(
    `https://api.newscatcherapi.com/v2/search?q=${search}`,
    { headers: { 'x-api-key': API.KEY } }
  );

  return data;
}
export default searchNewsFetch;
