import { ProfileDetails } from "@/components";
import { COLORS, PrivateRoutes, database } from "@/models";
import { loadUser } from "@/redux";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { History, NavbarPrivate, ReadLater, Section } from "../../components";

function Dashboard() {
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
      <NavbarPrivate currentPage={PrivateRoutes.DASHBOARD} />
      <ProfileDetails />
      <Section>
        <h2>{"My History"}</h2>
        <History isPreview/>
      </Section>
      <Section color={COLORS.SECONDARY_COLOR_ALPHA}>
        <h2>{"Read Later"}</h2>
        <ReadLater isPreview />
      </Section>
    </>
  )
}
export default Dashboard