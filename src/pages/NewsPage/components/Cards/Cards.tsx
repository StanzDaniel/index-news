import styled from "styled-components"
import Card from "./Card";

const CardsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  justify-content: space-evenly;

`
const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6", "Card 7", "Card 8", "Card 9", "Card 10"];

function Cards() {
  return (
    <CardsContainer>
      {cards.map((card, index) => <Card key={index} title={card}/>)}
    </CardsContainer>
  )
}
export default Cards