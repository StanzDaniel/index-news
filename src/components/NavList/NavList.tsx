import { COLORS, NavItem } from "@/models";
import { useContext } from "react";
import styled from "styled-components";
import { NavbarContext } from "../Navbar/Navbar";
import { SearchInput } from "../SearchInput";

const NavListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0 20px;
  overflow: auto;

  & .nav-item:nth-child(2) {
    margin-top: 15px;
  }

  @media (min-width: 768px) {
    & {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-grow: 1;
      order: 0;
      justify-content: space-between;
      max-width: 768px;
    }

    & .nav-item:nth-child(2) {
      margin-top: 0; 
    }
  }

`;

export const NavItemComponent = styled.li`
  color: #525252;
  transition: color 0.4s ease;
  cursor: pointer;
  white-space: nowrap;
  font-size: 12px;
  transition: transform 0.25s ease,
              color 0.4s ease;

  &.active {
    color: ${COLORS.SECONDARY_COLOR};
  }

  &:hover {
    color: ${COLORS.SECONDARY_COLOR};
    transform: scale(1.25);
  }
`;

function NavList() {
  const navItems = useContext(NavbarContext);

  return (
    <NavListContainer>
      <SearchInput placeholder={'search'} />
      {navItems.map((item: NavItem) => (
        <NavItemComponent
          key={item.title}
          className={`nav-item ${item.active ? 'active' : ''}`}
          onClick={() => item.handlerClick(item.title)}>
          {item.title}
        </NavItemComponent>
      ))}
    </NavListContainer>
  );
}
export default NavList