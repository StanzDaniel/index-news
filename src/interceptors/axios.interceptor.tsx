import { API_KEY } from "@/models"
import axios from "axios"


function AxiosInterceptor() {
  axios.interceptors.request.use((request) => {
    const newURL = `${request.url}&apiKey=${API_KEY}`

    return {...request, url: newURL}
  })
  axios.interceptors.response.use((response) => {
    console.log({RESPONSE: response})
    return response;
  }, (error) => { 
    console.log({ERROR: error.response.data.message});
    return Promise.reject(error);
  })
}
export default AxiosInterceptor