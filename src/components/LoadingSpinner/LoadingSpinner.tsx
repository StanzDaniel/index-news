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

export const Spinner = styled.div<{size?: number}>`
  border: ${props => props.size && props.size < 20 ? 3 : 5}px solid rgba(0, 0, 0, 0.1);
  width: ${props => props.size || 40}px;
  height: ${props => props.size || 40}px;
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

export function LoadingSpinner() {
  return (
    <CenterContainer>
      <Spinner />
    </CenterContainer>
  )
}