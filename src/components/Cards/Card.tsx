import { COLORS } from "@/models";
import styled from "styled-components";
import ReadLaterToggle from "../ReadLaterToggle/ReadLaterToggle";
import { News } from "@/interfaces";
import { setReadLater } from "@/services/setReadLater.service";
import { setHistory } from "@/services";

const CardContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: 20px;
  box-sizing: border-box;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  cursor: pointer;
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    max-width: 400px;
    margin-bottom: 40px;
  }
`;

const CardTitle = styled.h4`
  background: linear-gradient(${COLORS.SECONDARY_COLOR_ALPHA} 60%, transparent);
  margin: 0;
  min-height: 50px;
  padding: 10px 15px;
  text-align: right;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  overflow: hidden;
  position: absolute;
  top: 0;
  font-size: 1.3rem;
`;  

const CardFooter = styled.div`
  background: linear-gradient(transparent 0%, #fff 100%);
  width: 100%;
  height: 1.8rem;
  position: absolute;
  bottom: 0;
`;

const CardImage = styled.img`  
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`

interface CardProps {
  news: News;
}



function Card({ news }: CardProps) {

  const clickOnNews = () => {
    setHistory(news);
    window.open(news.link);
  }

  return (
    <CardContainer >
      <CardTitle>{news.title}</CardTitle>
      <CardImage onClick={clickOnNews} src={news.media ? news.media : "src/assets/img/no_image_avaliable.jpg"} alt="" onError={({currentTarget}) => {
        currentTarget.onerror = null;
        currentTarget.src = "src/assets/img/no_image_avaliable.jpg";
      }}/>
      <ReadLaterToggle news={news}/>
      <CardFooter />
    </CardContainer>
  )
}
export default Card
