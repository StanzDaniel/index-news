import axios from "axios"

function searchNewsFetch(search: {}) {
  const data = axios.get(`https://newsapi.org/v2/everything?q=${search}`);

  return data
}
export default searchNewsFetch