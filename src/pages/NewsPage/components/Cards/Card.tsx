import styled from "styled-components"
import { Details, Title } from "../NewsText";

const CardContainer = styled.div`
  height: 22rem;
  width: 27rem;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  position: relative;
`;

function Card(props: any) {

  return (
    <CardContainer >
      <Title>{props.title}</Title>
      <Details>{"detalles de la noticia"}</Details>
    </CardContainer>
  )
}
export default Card