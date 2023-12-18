import { COLORS } from "@/models";
import styled from "styled-components";

const InputUser = styled.input`

  @media (min-width: 768px) {
    & {
      border-bottom: 1px solid ${COLORS.SECONDARY_COLOR_ALPHA};
    }
  }
  &:hover, &:focus {
    border: 1px solid ${COLORS.SECONDARY_COLOR_ALPHA};
  }

  &.error {
    border: 1px solid red;
  }

  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: ${COLORS.PRIMARY_COLOR};
  caret-color: ${COLORS.SECONDARY_COLOR_ALPHA};
  font-size: 12px;
  font-family: inherit;
  box-sizing: inherit;
  border-radius: 10px;
  border: 1px solid transparent;
  outline: 0;
  transition: border 0.4s ease


`;

export default InputUser;