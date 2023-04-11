import { useState } from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";


const MenuButton = styled.img`
  width: 40px;
  height: 48px;
  margin: 10px;
  transition: transform 200ms ease;
  &:active {
    transform: scale(0.9)
  }
`;

const CloseBtn = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  right: 0px;
  top: 0px;
  background: url("src/assets/close_icon.svg") no-repeat center;
`


function Menu() {
  const [isVisible, setIsVisible] = useState(false)
  
  return (
     <>
      <MenuButton src="src\assets\menu_icon.svg" onClick={() => setIsVisible(!isVisible)}/>
      { 
        isVisible ?
        // REFACTORING: utilizar rxjs
        <DropdownMenu setIsVisible={setIsVisible}>
          <CloseBtn onClick={() => setIsVisible(!isVisible)}/>
        </DropdownMenu> :
        null 
      }
    </>
  )
}
export default Menu