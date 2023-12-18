import { setHistory } from '@/services';
import styled from 'styled-components';
import { useNewsPageContext } from '../../pages/NewsPage/context';
import Card from './Card';
import { News } from '@/interfaces';

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

  const news: News[]= newsPageContext.contextValue;

  return (
    <CardsContainer>
      {news.map((card: News, index) => (
        <Card
          news={card}
          key={index}
        />
      ))}
    </CardsContainer>
  );
}
export default Cards;





