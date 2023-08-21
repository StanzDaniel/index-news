import { COLORS } from "@/models";
import styled from "styled-components";

export const ButtonPrimary = styled.button`
  background-color: ${COLORS.SECONDARY_COLOR};
  color: #fff;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  width: 33%;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: background-color 0.4s ease;
  &:hover {
    background-color: ${COLORS.SECONDARY_COLOR_ALPHA};
  }
`;