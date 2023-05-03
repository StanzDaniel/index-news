
import styled from "styled-components";
import { SearchInput } from "../SearchInput";
import { COLORS } from "@/models";

const NavListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0 20px;
  overflow: auto;

  & .nav-item {
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

    &:nth-child(2) {
      margin-top: 15px;
    }
  }

`;

interface Props {
  navItems: string[],
}

function NavList({navItems}: Props) {
  return (
    <NavListContainer>
      <SearchInput placeholder="search"/>
      {navItems.map( (item:string, index:number) => <li key={index} className="nav-item">{item}</li> )}
    </NavListContainer>
  )
}
export default NavList