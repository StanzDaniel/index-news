import { API } from '@/models';
import axios from 'axios';

async function topNewsFetch(value: {}) {
  const data = await axios.get(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=${value}`,
    { headers: { 'x-api-key': API.KEY } }
  );

  return data;
}
export default topNewsFetch;
