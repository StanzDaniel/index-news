import hamburgerIcon from "@/assets/hamburguerMenu.svg";
import { COLORS } from "@/models";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { DropdownMenu } from "../DropdownMenu";
import { navItems } from "../DropdownMenu/DropdownMenu";
import { NavList } from "../NavList";
import { Profile } from "../Profile";

const NavbarContainer = styled.nav`
  background-color: ${COLORS.PRIMARY_COLOR};
  height: 55px;
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  align-items: center;
  justify-items: center;
  border-radius: 10px;
  margin: 10px;
  position: fixed;
  right: 0; 
  left: 0;
  z-index: 9;
  transition: top 600ms ease;

  &.hidden {
    top: -100px;
  }

  & .logo {
    grid-column: 2;
  }

  & .hamburguer-menu {
    justify-self: end;
    margin-right: 10px;
    transition: transform 0.25s ease;

    &:hover {
      transform: scale(1.25);
    }
  }

  .desktop-menu {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 55px;
    position: relative;
    background-color: inherit;
    justify-content: space-around;
  }

  @media (min-width: 768px) {
    & {
      grid-template-columns: 10% 1fr;
      margin: 0;
      border-radius: 0;
    }
    & .logo {
      grid-column: 1;
    }
  }
`;

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile: boolean = window.innerWidth < 768;

  useEffect(() => {
    let scrollPosition = window.scrollY;
    document.addEventListener('scroll', () => {
      const newPosition = window.scrollY;
      newPosition > scrollPosition ? setIsNavVisible(false) : setIsNavVisible(true);
      scrollPosition = newPosition;
    });
  })

  return (
    <NavbarContainer className={!isNavVisible ? 'hidden' : ''}>
      <div className='logo'>
        <img src='src\assets\logo.svg' alt='logotipe' className='logo-image' />
      </div>
      {isMobile ? (
        isDropdownOpen ? (
          <DropdownMenu setIsVisible={setIsDropdownOpen} />
        ) : (
          <div
            className='hamburguer-menu'
            onClick={() => setIsDropdownOpen(true)}>
            <img src={hamburgerIcon} alt='abrir menu' />
          </div>
        )
      ) : (
        <div className="desktop-menu">
          <NavList navItems={navItems} />
          <Profile showName={false} />
        </div>
      )}
    </NavbarContainer>
  );
}
export default Navbar