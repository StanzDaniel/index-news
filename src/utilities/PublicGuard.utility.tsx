import { PrivateRoutes } from "@/models";
import { Navigate, Outlet } from "react-router-dom";

function PublicGuard() {
  const user = localStorage.getItem("user");
  return user ? <Navigate replace to={PrivateRoutes.PRIVATE}/> : <Outlet/>;
}

export default PublicGuard