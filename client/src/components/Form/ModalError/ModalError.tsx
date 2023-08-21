import styled from "styled-components";

export const ModalError = styled.div`
  background-color: pink;
  border: 1px solid red;
  border-radius: 10px;
  position: absolute;
  bottom: -42px;
  left: 35px;
  z-index: 1;
  padding: 10px 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  &:before {
    content: "";
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    border-bottom: 7px solid red;
    transform: translateX(-50%);
    position: absolute;
    bottom: 100%;
    left: 50%;
    height: 0px;
    width: 0px;
  }
`;
