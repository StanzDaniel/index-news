import { User } from "@/interfaces";
import { PrivateRoutes } from "@/models";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function UserInfo() {
  const user: User = useSelector((store: any) => store.user)
  return (
    <>
      <h3>{user.userName}</h3>
      <p>{`${user.lastName}, ${user.name}`}</p>
      <p>{user.email}</p>
      <Link to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.SETTINGS}`}>edit profile</Link>
    </>
  );
}