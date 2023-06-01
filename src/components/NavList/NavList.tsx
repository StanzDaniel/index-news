import { COLORS } from "@/models";
import { ReactNode } from "react";
import styled from "styled-components";
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


interface Props {
  children: ReactNode,
  submitSearchInput: (text: string) => void
};

function NavList({children, submitSearchInput}: Props) {
  return (
    <NavListContainer>
      <SearchInput handleSubmit={submitSearchInput} />
      {children}
    </NavListContainer>
  );
}
export default NavList