import { useContext } from "react";
import styled from "styled-components";
import { SliderContext } from "../Slider";

const ImageSliderContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  opacity: 0.05;
  transition: opacity 1s ease;
  overflow-x: clip;
  align-items: center;
  
  & .main-image {
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  
  &.loaded {
    opacity: 1;
  }
  
  @media (min-width: 768px) {
    grid-template-columns: 22% 1fr 22%;

    & .main-image {
      z-index: 1;
    }
  }
`;

const PrevImage = styled.img`
  opacity: 0.4;
  height: 80%;
  width: 100%;
  object-fit: cover;
  box-shadow: 0 0 0.25em  rgba(67,71,85,0.27), 
              0.2px 0.2em 24px 0 rgba(1,29,77,0.15);
`;


const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;

  @media (min-width: 768px) {
    box-shadow: 0 0 10px 8px rgba(0, 0, 0, 0.3);
  }
`;

const NewsTitle = styled.h2`
  position: absolute;
  box-sizing: border-box;
  height: 6rem;
  width: 100%;
  padding: 1rem;
  padding-top: 1.5rem;
  margin: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4), transparent);
  color: #fff;
  text-align: right;
  border-radius: inherit;
  font-size: 24px;
  text-overflow: ellipsis;
`;

type Props = {
  images: any,
}


function ImageSlider({images}: Props) {

  console.log({IMAGES: images})

  const {selectedIndex, loaded, setLoaded} = useContext(SliderContext);
  const isMobile: boolean = window.innerWidth < 768;

  const selectedImage = { ...images[selectedIndex]};
  const prevIndex = selectedIndex - 1 < 0 ? images.length - 1 : selectedIndex - 1;
  const prevImage = {...images[prevIndex]};

  const nextIndex = selectedIndex + 1 > images.length - 1 ? 0 : selectedIndex + 1;
  const nextImage = {...images[nextIndex]};

  const handleOnLoadImage = () => setLoaded(true);

  return (
    <ImageSliderContainer className={`${loaded && 'loaded'}`}>
      {!isMobile && <PrevImage src={prevImage.urlToImage} alt='image of the news' /> }
      <div className="main-image" onClick={() => window.open(selectedImage.url)} >
        <Image
          src={selectedImage.urlToImage}
          alt='image of the news'
          onLoad={handleOnLoadImage}
        />
        <NewsTitle>{selectedImage.title}</NewsTitle>
      </div>
      {!isMobile && <PrevImage src={nextImage.urlToImage} alt='image of the news' /> }
    </ImageSliderContainer>
  );
}
export default ImageSlider