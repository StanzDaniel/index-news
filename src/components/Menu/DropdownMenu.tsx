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
`;

function DropdownMenu({ children, setIsVisible }) {
  const dropdownRef = useRef(null);

  const handlerClickOutside = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  }

  useEffect( () => {
    document.addEventListener("mousedown", handlerClickOutside)
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      {children}
    </DropdownContainer>
  )
}
export default DropdownMenu