import { COLORS, PublicRoutes } from "@/models";
import { CenteredContainer } from "@/utilities";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Modal = styled.div`
  background-color: ${COLORS.SECONDARY_COLOR};
  max-height: 40vw;
  height: 200px;
  max-width: 40vw;
  width: 200px;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 0 5px 5px ${COLORS.SECONDARY_COLOR};
  position: relative;

  &::after {
    content:'';
    position: absolute;
    bottom: max(-25vw, -120px);
    background-color: gray;
    width: 130%;
    height: 15%;
    border-radius: 50%;
    box-shadow: 0 0 5px 5px gray;
  }

`;

export function SuccesfulModal({redirect}:{redirect: string}) {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(`/${redirect}`, { replace: true });
    }, 900);
  }, [])
  return (
    <CenteredContainer>
      <Modal>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='200'
          viewBox='0 -960 960 960'
          width='200'
          fill='#00ff7f'
          stroke='black'
          strokeWidth='5'
          >
          <path d='M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z' />
        </svg>
      </Modal>
    </CenteredContainer>
  );
}
