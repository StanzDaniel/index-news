import { NavItem, NavList, Navbar } from "@/components"
import { PublicRoutes } from "@/models"
import RegisterForm from "./RegisterForm"
import { useNavigate } from "react-router-dom";
import { CenteredContainer } from "@/utilities";


function Register() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar>
        <NavList>
          <NavItem
            className={`nav-item`}
            click={() => navigate(`../${PublicRoutes.LOGIN}`, { replace: true })}
            value={'login'}>
            {'Login Here'}
          </NavItem>
          <NavItem
            className={`nav-item`}
            click={() => navigate(`../${PublicRoutes.HOME}`, { replace: true })}
            value={'unknown'}>
            {'Still Unknown'}
          </NavItem>
        </NavList>
      </Navbar>
      <CenteredContainer>
        <RegisterForm />
      </CenteredContainer>
    </>
  );
}
export default Register