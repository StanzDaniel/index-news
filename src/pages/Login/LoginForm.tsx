import { FormUser, InputUser } from "@/components";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import { User } from "@/interfaces";
import { PrivateRoutes } from "@/models";
import { userEmptyState } from "@/redux";
import { CenteredContainer } from "@/utilities";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [value, setValue ] = useState<User>(userEmptyState)
  const user = useSelector((store: any)=> store.user)
  const navigate = useNavigate();

  const isLoginValid = () => {
    return value.email === user.email && value.password === user.password
  };

  const loginUser = () => {
    if (isLoginValid()) {
      navigate(`../${PrivateRoutes.PRIVATE}/`, {replace: true});
    }
  }

  return (
    <CenteredContainer>
      <FormUser onSubmit={loginUser}>
        <InputUser value={value.email} type="email" placeholder="email" onChange={(e) => setValue({ ...value, email: e.target.value })} />
        <InputUser value={value.password} type="password" placeholder="password" onChange={(e) => setValue({ ...value, password: e.target.value })} />
        <ButtonPrimary type="submit">{"Login"}</ButtonPrimary>
      </FormUser>
    </CenteredContainer>
  )
}

export default LoginForm;