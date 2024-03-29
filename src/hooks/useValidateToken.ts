import { database } from "@/models";
import { loadUser } from "@/redux";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useValidateToken() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = document.cookie.replace("token=", "");
    axios
    .post(database.VALIDATE_TOKEN, null, {
      headers: {
        'Access-Key': database.ACCESS_KEY,
        'Authorization': token,
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
}
export default useValidateToken