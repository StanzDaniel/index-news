import { useState } from "react";
import ProfileImage from "./ProfileImage/ProfileImage";
import { ProfileModal } from "./ProfileModal";


export interface ProfileProps {
  showName: boolean,
  user?: {name: string, image: string},
}

function Profile({showName, user}: ProfileProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlerModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <ProfileImage showName={showName} user={user} onClick={handlerModal}/>
      {isModalOpen && <ProfileModal onClick={handlerModal}/>}
    </>
  )
}
export default Profile