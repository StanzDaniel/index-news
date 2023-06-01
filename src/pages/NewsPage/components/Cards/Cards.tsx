import styled from "styled-components"
import Card from "./Card";
import { useNewsPageContext } from "../../context";

const CardsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
    padding: 0 40px;
  }
`;
function Cards() {
  const newsPageContext = useNewsPageContext();


  return (
    <CardsContainer>
      { newsPageContext.contextValue.map((card: any, index) => <Card key={index} title={card.title} image={card.urlToImage} description={card.description} onClick={() => window.open(card.url)}/>)}
    </CardsContainer>
  )
}
export default Cards