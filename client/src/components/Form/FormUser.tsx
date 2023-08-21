import { COLORS } from "@/models";
import styled from "styled-components"

const FormUser = styled.form`
  background-color: ${COLORS.PRIMARY_COLOR_ALPHA};
  display: flex;
  flex-direction: column;
  padding: 40px;
  padding-top: 85px;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: space-around;
  box-sizing: border-box;

  @media (min-width: 768px) {
    & {
      border-radius: 10px;
      box-shadow: 4px 4px 10px 3px ${COLORS.SECONDARY_COLOR_ALPHA};
      width: 400px;
      height: auto;
      padding-top: 20px;
      max-width: 400px;
      margin-top: 100px;
    }
  }

`;
export default FormUser
