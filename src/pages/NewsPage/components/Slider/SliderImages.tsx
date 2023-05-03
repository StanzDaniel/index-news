import styled from "styled-components";
import { Title } from "../NewsText";

const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function SliderImages(props: any) {
  return (
    <ImageContainer className={props.className}>
      <Title style={{paddingTop: "2.5rem"}}>{"titulo de la noticia"}</Title>
      <SliderImage {...props} />
    </ImageContainer>
  )
}
export default SliderImages