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

function Menu() {
  const [isVisible, setIsVisible] = useState(false)
  
  return (
     <>
      <MenuButton src="src\assets\menu_icon.svg" onClick={() => setIsVisible(!isVisible)}/>
      { 
        isVisible ?
        // REFACTORING: utilizar rxjs
        <DropdownMenu setIsVisible={setIsVisible}>
          <div>children</div>
        </DropdownMenu> :
        null 
      }
    </>
  )
}
export default Menu