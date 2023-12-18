import { PrivateRoutes } from '@/models';
import { Link } from 'react-router-dom';
import { Card } from '@/components/Cards';
import { CardsContainer } from '@/components/Cards/Cards';
import { News } from '@/interfaces';
import { useSelector } from 'react-redux';

export function ReadLater({ isPreview }: { isPreview?: boolean }) {
    const { readLater } = useSelector((store: any) => store.user);

    const data = isPreview ? readLater.slice(0, 6) : readLater;

    if (readLater.length === 0)
        return (
            <CardsContainer>
                <h3>{'NO CONTENT'}</h3>
            </CardsContainer>
        );

    return (
        <CardsContainer>
            {data.map((card: News, index: number) => (
                <Card key={index} news={card} />
            ))}
            {isPreview && (
                <Link
                    to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HISTORY}`}>{`see all (${readLater.length - data.length
                        })`}</Link>
            )}
        </CardsContainer>
    );
}
