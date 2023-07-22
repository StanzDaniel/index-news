import { COLORS } from "@/models";
import styled from "styled-components"

const FormUser = styled.form`
  background-color: ${COLORS.PRIMARY_COLOR_ALPHA};
  border-radius: 10px;
  box-shadow: 4px 4px 10px 3px ${COLORS.SECONDARY_COLOR_ALPHA};
  width: 400px;
  max-width: 400px;
  height: 200px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: space-around;

`;
export default FormUser