import styled from "styled-components";
import { useNewsPageContext } from "../../pages/NewsPage/context";
import Card from "./Card";
import { CenteredContainer } from "@/utilities";

export const CardsContainer = styled.div`
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

  const news = newsPageContext.contextValue;
  console.log(news)

  return (
    <CardsContainer>
      { news.map((card: any, index) => <Card key={index} title={card.title} image={card.urlToImage} description={card.description} onClick={() => window.open(card.url)}/>)}
    </CardsContainer>
  )
}
export default Cards