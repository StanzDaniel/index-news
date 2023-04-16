import { useEffect, useRef } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  width: 67vw;
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  border-radius: 15px 0 0 15px;
  opacity: 86%;
  z-index: 2;
`;

const CloseBtn = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  right: 0px;
  top: 0px;
  background: url("src/assets/close_icon.svg") no-repeat center;
  & .
`;

interface Props {
  children: JSX.Element,
  setIsVisible: (param: boolean) => void;
}

function DropdownMenu({children, setIsVisible}: Props) {
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
      <CloseBtn onClick={() => setIsVisible(false)}/>
      {children}
    </DropdownContainer>
  )
}
export default DropdownMenu