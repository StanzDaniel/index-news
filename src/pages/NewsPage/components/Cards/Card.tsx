import styled from "styled-components"
import { Details, Title } from "../NewsText";

const CardContainer = styled.div`
  height: 30rem;
  width: 27rem;
  border-radius: 15px;
  background-color: #fff;
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