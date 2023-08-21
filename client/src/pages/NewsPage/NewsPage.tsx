import { database } from "@/models";
import { loadUser } from "@/redux";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Cards, NewsPageContent, Slider } from "./components";
import { NavbarNewsPage } from "./components/NavbarNewsPage";
import { NewsPageProvider } from "./context";



function NewsPage() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const token = document.cookie.replace("token=", "");
    axios
    .post(database.VALIDATE_TOKEN, null, {
      headers: {
        'Access-Key': database.ACCESS_KEY,
        Authorization: token,
      },
    })
    .then(res => res)
    .then(user => {     
      dispatch(loadUser(user.data));
    })
    .catch(err => {
      document.cookie = `token=; max-age=0;`;
    });    
  }, [])
  
  return (
    <NewsPageProvider>
      <NavbarNewsPage/>
      <NewsPageContent>
        <Slider />
        <Cards />
      </NewsPageContent>
    </NewsPageProvider>
  );
};
export default NewsPage;