import { useSelector } from 'react-redux';
import { CardsContainer } from '@/components/Cards/Cards';
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '@/models';
import { Card } from '@/components/Cards';
import { News } from '@/interfaces';

export function History({ isPreview }: { isPreview?: boolean }) {
  const { history } = useSelector((store: any) => store.user);


  const data = isPreview ? history.slice(0, 6) : history;

  if (history.length === 0) return <CardsContainer><h3>{'NO CONTENT'}</h3></CardsContainer>;
  
  return (
    <CardsContainer>
      {data.map((card: News, index: number) => (
        <Card
          key={index}
          news={card}
        />
      ))}
      {isPreview && (
        <Link to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HISTORY}`}>{`see all (${
          history.length - data.length
        })`}</Link>
      )}
    </CardsContainer>
  );
}
