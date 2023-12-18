import { COLORS } from "@/models";
import styled from "styled-components";

export const Section = styled.section<{color?: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(Props) => Props.color ? Props.color : 'inherit'};
  padding-bottom: 40px;
  

  & a {
    background-color:  ${COLORS.SECONDARY_COLOR_ALPHA};
    height: fit-content;
    padding: 5px 10px;
    border-radius: 15px;
  }

  & h2 {
    font-size: 40px;
    color: #525252;
  }
`;