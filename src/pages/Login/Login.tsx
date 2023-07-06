import { NavItem, NavList, Navbar } from "@/components"
import { PublicRoutes } from "@/models";
import { useNavigate } from "react-router-dom"
import LoginForm from "./LoginForm";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar>
        <NavList>
          <NavItem
            className={`nav-item`}
            click={() => navigate(`../${PublicRoutes.REGISTER}`, { replace: true })}
            value={'register'}>
            {'Register'}
          </NavItem>
          <NavItem
            className={`nav-item`}
            click={() => navigate(`../${PublicRoutes.HOME}`, { replace: true })}
            value={'unknown'}>
            {'Skip'}
          </NavItem>
        </NavList>
      </Navbar>
      <LoginForm />
    </>
  )
}
export default Login