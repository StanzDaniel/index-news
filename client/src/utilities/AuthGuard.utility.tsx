import { PublicRoutes } from "@/models";
import { Navigate, Outlet } from "react-router-dom"

function AuthGuard() {
  const user = localStorage.getItem("user");
  return user ? <Outlet/> : <Navigate replace to={PublicRoutes.LOGIN}/>;
}

export default AuthGuard