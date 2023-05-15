import closeIcon from "@/assets/close_icon.svg";
import { useClickOutside } from "@/hooks";
import { COLORS } from "@/models";
import { useRef } from "react";
import styled from "styled-components";
import { NavList } from "../NavList";
import { Profile } from "../Profile";

const DropdownContainer = styled.div`
  display: flex;
  position: fixed;
  right: 0; top: 0;
  background-color: ${COLORS.PRIMARY_COLOR_ALPHA} ;
  backdrop-filter: blur(1px);
  width: 65%;
  height: 100vh;
  flex-direction: column;

  & .close-dropdown {
    align-self: end;
    padding: 10px;
    transition: transform 0.25s ease;

    &:hover {
      transform: scale(1.25);
    }
  }
`;

interface Props { 
  setIsVisible: (param: boolean) => void;
}

function DropdownMenu({setIsVisible}: Props) {
  const dropdownRef = useRef(null);
  
  useClickOutside(dropdownRef, setIsVisible)

  return (
    <DropdownContainer ref={dropdownRef}>
      <div className="close-dropdown" onClick={() => setIsVisible(false)}>
        <img src={closeIcon} alt="Cerrar menu" />
      </div>
      <Profile showName={true}/>
      <NavList />
    </DropdownContainer>
  )
}
export default DropdownMenu