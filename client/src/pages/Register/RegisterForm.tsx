import { FormUser, InputUser } from "@/components";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import { User } from "@/interfaces";
import { PublicRoutes } from "@/models";
import { createUser, userEmptyState } from "@/redux";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";

function RegisterForm() {
  const [value, setValue ] = useState<User>(userEmptyState)
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const sendUser = () => {
    navigate(`../${PublicRoutes.LOGIN}`, {replace: true});
    dispatcher(createUser(value));
    setValue(userEmptyState);  
  }

  return (
    <FormUser onSubmit={sendUser}>
      <InputUser value={value.name} type="text" placeholder="name" onChange={(e) => setValue({ ...value, name: e.target.value })} />
      <InputUser value={value.email} type="email" placeholder="email" onChange={(e) => setValue({ ...value, email: e.target.value })} />
      <InputUser value={value.password} type="password" placeholder="password" onChange={(e) => setValue({ ...value, password: e.target.value })} />
      <ButtonPrimary type="submit">Register</ButtonPrimary>
    </FormUser>
  )
}

export default RegisterForm;