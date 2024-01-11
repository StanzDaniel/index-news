import { DIRECTION } from "@/pages/NewsPage/models";
import { useContext } from "react";
import styled from "styled-components";
import { SliderContext } from "../Slider";
import arrowBtn from "@/assets/arrow_btn.svg"

const StyledButton = styled.button`
  width: 62px;
  height: calc(100% - 3rem);
  position: absolute;
  opacity: 0.5;
  text-align: center;
  &.prev {
    left: 0;
  }
  &.next {
    transform: scaleX(-1);
    right: 0;
  }
`;

interface Props {
  direction: DIRECTION,
}

function ArrowButton({direction}: Props) {
  const {handlerSlider} = useContext(SliderContext);

  return (
    <StyledButton className={direction} onClick={() => handlerSlider(direction) }><img src={arrowBtn} alt={direction} /></StyledButton>
  )
}
export default ArrowButton