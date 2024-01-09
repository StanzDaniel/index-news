import { News } from "@/interfaces";
import { setReadLater } from "@/services/setReadLater.service";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Star = styled.div<{isStared: boolean}>`
  width: 40px;
  height: 40px;
  background-image: url(${(Props) => Props.isStared ? "../src/assets/star_filled.svg" : "../src/assets/star.svg"});
  background-position: center;
  background-size: cover;
  position: absolute;
  bottom: 35px;
  left: 25px;
  transition: transform 0.25s ease;

  
  &:hover {
    transform: scale(1.2);
  }

  &.animate {
  animation: spin 0.8s ease;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  `;
  

function ReadLaterToggle({news}: {news: News}) {
  const [isStared, setIsStared] = useState(false);
  const { readLater } = useSelector((store: any) => store.user);

  useEffect(() => {
    const includes = readLater.filter((item: News) => item.summary === news.summary);
    if (includes.length > 0) {
      setIsStared(true);
    }
  }, [readLater])

  const onClick = () => {
    setReadLater(news)
    setIsStared(!isStared);
  };

  return (
    <Star isStared={isStared} className={`${isStared ? "animate" : ""}`} onClick={onClick}  />
  )
}
export default ReadLaterToggle