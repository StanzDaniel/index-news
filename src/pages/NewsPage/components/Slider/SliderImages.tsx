import styled from "styled-components";
import { Title } from "../NewsText";

const ImageContainer = styled.div`
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const SliderImage = styled.img`
  max-width: 500px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function SliderImages(props: any) {
  return (
    <ImageContainer className={props.className}>
      <Title>{"titulo de la noticia"}</Title>
      <SliderImage {...props} />
    </ImageContainer>
  )
}
export default SliderImages