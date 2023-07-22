import { COLORS } from "@/models";
import styled from "styled-components"

const CenterContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

const Spinner = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-left-color: ${COLORS.SECONDARY_COLOR};

  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

function LoadingSpinner() {
  return (
    <CenterContainer>
      <Spinner />
    </CenterContainer>
  )
}
export default LoadingSpinner