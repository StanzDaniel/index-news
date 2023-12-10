import { useNavbarContext } from "@/context";
import { COLORS } from "@/models";
import { ReactNode } from "react";
import styled from "styled-components";

const NavItemContainer = styled.li`
  color: #525252;
  transition: color 0.4s ease;
  cursor: pointer;
  white-space: nowrap;
  font-size: 12px;
  transition:
    transform 0.25s ease,
    color 0.4s ease;

  &.active {
    color: ${COLORS.SECONDARY_COLOR};
  }

  &:hover {
    color: ${COLORS.SECONDARY_COLOR};
    transform: scale(1.25);
  }
`;

interface Props {
  children: ReactNode;
  click: (text: string) => void;
  className?: string;
  value: string;
}

function NavItem({ children, click, className, value }: Props) {
  const navbarContext = useNavbarContext();

  const handleClick = (text: string) => {
    click(text);
    navbarContext.setContextValue(false);
  };

  return (
    <NavItemContainer className={className} onClick={() => handleClick(value)}>
      {children}
    </NavItemContainer>
  );
}
export default NavItem;

