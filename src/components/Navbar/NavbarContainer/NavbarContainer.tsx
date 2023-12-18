import { DropdownMenu, Profile } from "@/components";
import { useNavbarContext } from "@/context";
import { COLORS, PublicRoutes } from "@/models";
import { mobileCheck } from "@/utilities";
import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
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

function NavbarContainer({children}: {children: ReactNode}) {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const isMobile = mobileCheck();

    const navbarContext = useNavbarContext();


    useEffect(() => {
      let scrollPosition = window.scrollY;
      document.addEventListener('scroll', () => {
        const newPosition = window.scrollY;
        newPosition > scrollPosition ? setIsNavVisible(false) : setIsNavVisible(true);
        scrollPosition = newPosition;
      });
    })
  

  return (
    <Container className={!isNavVisible ? 'hidden' : ''}>
      <Link to={`/${PublicRoutes.HOME}`} className='logo'>
        <img
          src='../src/assets/logo.svg' 
          alt='logotype'
          className='logo-image'
        />
      </Link>
      {isMobile ? (
        navbarContext.contextValue ? (
        <DropdownMenu >{children}</DropdownMenu>
        ) : (
          <div
            className='hamburguer-menu'
            onClick={() => navbarContext.setContextValue(true)}>
            <img src='../src/assets/hamburguerMenu.svg' alt='abrir menu' />
          </div>
        )
      ) : (
        <div className='desktop-menu'>
          {children}
          <Profile showName={false} />
        </div>
      )}
    </Container>
  )
}
export default NavbarContainer