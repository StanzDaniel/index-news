import { ProfileDetails } from "@/components";
import { PrivateRoutes, database } from "@/models";
import { loadUser } from "@/redux";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { History, NavbarPrivate, Section } from "../../components";


function HistoryPage() {
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
      document.cookie = `token=; max-age=0; path=/`;
    });    
  }, [])
  
  return (
    <>
      <NavbarPrivate currentPage={PrivateRoutes.HISTORY} />
      <ProfileDetails />
      <Section>
        <h2>{"My History"}</h2>
        <History />
      </Section>
    </>
  )
}
export default HistoryPage