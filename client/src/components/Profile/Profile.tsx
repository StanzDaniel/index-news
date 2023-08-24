import { useState } from "react";
import ProfileImage from "./ProfileImage/ProfileImage";
import { ProfileModal } from "./ProfileModal";


export interface ProfileProps {
  showName?: boolean,
}

function Profile({showName}: ProfileProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handlerModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <ProfileImage showName={showName} onClick={handlerModal}/>
      {isModalOpen && <ProfileModal onClick={handlerModal}/>}
    </>
  )
}
export default Profile