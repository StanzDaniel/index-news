import { useEffect, useRef } from "react";
import styled from "styled-components";
import closeIcon from "@/assets/close_icon.svg";
import { Profile } from "../Profile";
import { NavList } from "../NavList";
import { COLORS } from "@/models";

export const navItems: string[] = ["Top News", "finanzas", "tecnologia", "salud", "ciencia"];

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
  const dropdownRef: any= useRef();

  const handlerClickOutside = (e: MouseEvent) => {
    if (!dropdownRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  }

  useEffect( () => {
    document.addEventListener("mousedown", handlerClickOutside)
    
    return () => {
      document.removeEventListener("mousedown", handlerClickOutside)
    }            
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <div className="close-dropdown" onClick={() => setIsVisible(false)}>
        <img src={closeIcon} alt="Cerrar menu" />
      </div>
      <Profile showName={true}/>
      <NavList navItems={navItems}/>
    </DropdownContainer>
  )
}
export default DropdownMenu