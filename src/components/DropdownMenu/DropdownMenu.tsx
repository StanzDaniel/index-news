import closeIcon from "@/assets/close_icon.svg";
import { useNavbarContext } from "@/context";
import { useClickOutside } from "@/hooks";
import { COLORS } from "@/models";
import { ReactNode, useRef } from "react";
import styled from "styled-components";
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

function DropdownMenu({children}: {children: ReactNode}) {
  const dropdownRef = useRef(null);
  const navbarContext = useNavbarContext();
  
  useClickOutside(dropdownRef, navbarContext.setContextValue)
  return (
    <DropdownContainer data-testid="dropdownMenu" ref={dropdownRef}>
      <div className="close-dropdown" onClick={() => navbarContext.setContextValue(false)}>
        <img src={closeIcon} alt="Cerrar menu" />
      </div>
      <Profile showName={true}/>
      {children}
    </DropdownContainer>
  )
}
export default DropdownMenu