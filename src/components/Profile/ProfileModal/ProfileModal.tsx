import { COLORS } from "@/models";
import styled from "styled-components"
import ProfileImage from "../ProfileImage/ProfileImage";
import { useRef } from "react";
import { useClickOutside } from "@/hooks";
import { NavItem } from "@/components";

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  right: 0; top: 0;
  background-color: ${COLORS.PRIMARY_COLOR};
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  padding-top: 20px;
  gap: 30px;
  list-style: none;

  @media (min-width: 768px) {
    background-color: ${COLORS.PRIMARY_COLOR_ALPHA} ;
    backdrop-filter: blur(1px);
    width: 25%;
  }
`;
interface Props {
  onClick: () => void;
}

function ProfileModal({ onClick}: Props) {
  const modalRef = useRef(null);
  useClickOutside(modalRef, onClick);

  const handleClick = (text: string) => {
    console.log(text);
  }

  return (
    <ModalContainer ref={modalRef}>
      <ProfileImage showName={true} onClick={onClick}/>
      <NavItem click={handleClick} value="saved">{"saved"}</NavItem>
      <NavItem click={handleClick} value="settings">{"settings"}</NavItem>
      <NavItem click={handleClick} value="logout">{"logout"}</NavItem>
    </ModalContainer>
  )
}
export default ProfileModal