
import { API } from "@/models";
import axios from "axios";


function AxiosInterceptor() {
  axios.interceptors.request.use((request) => {
    if (request.url && request.url.includes(API.NAME)) {
      const newURL = `${request.url}&apiKey=${API.KEY}`
      request.url = newURL;
      return request;
    }
    
    return request;
  });
}
export default AxiosInterceptor