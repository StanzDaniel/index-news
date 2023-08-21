import { PublicRoutes } from "@/models";
import { Navigate, Outlet } from "react-router-dom"

function AuthGuard() {
  const token = localStorage.getItem("token");
  return token ? <Outlet/> : <Navigate replace to={PublicRoutes.LOGIN}/>;
}

export default AuthGuard