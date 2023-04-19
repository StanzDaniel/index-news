import styled from "styled-components";
import { Menu } from "../Menu";
import { useEffect, useState } from "react";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  margin: 1.2rem;
  height: 4.3rem;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  transition: top 600ms ease;
  &.hidden {
    top: -100px;
  }
`;

const Logo = styled.img`
  margin: 0 auto;
  width: 3.3rem;
`;


function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    let scrollPosition = window.scrollY;
    document.addEventListener('scroll', () => {
      const newPosition = window.scrollY;
      newPosition > scrollPosition ? setIsNavVisible(false) : setIsNavVisible(true);
      scrollPosition = newPosition;
    });

  })

  return ( 
    <FlexContainer className={!isNavVisible ? "hidden" : ""}>
      <div style={{width: "3.3rem"}}/>
      <Logo src="src\assets\logo.svg"/>
      <Menu />
    </FlexContainer>
  )
}
export default Navbar