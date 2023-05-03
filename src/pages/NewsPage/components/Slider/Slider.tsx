import { useEffect, useState } from "react"
import styled from "styled-components"
import SliderImages from "./SliderImages";

const SliderContainer = styled.div`
  width: 100%;
  height: 20rem;
  padding-top: 3rem;
  background-color: #9f9fa0;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  position: relative;
`;

const ArrowBtn = styled.div`
  width: 62px;
  height: 100%;
  position: absolute;
  z-index: 1;
  opacity: 0.5;
  background: url("src/assets/arrow_btn.svg") no-repeat center;
  &.previous {
    left: 0;
  }
  &.next {
    transform: rotate(180deg);
    right: 0;
  }
`;


const images = ['img.jpg', 'img_2.jpg', 'img_3.jpg'];

function Slider() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      const interval = setInterval(() => handleSlider(true), 4000);

      return () => clearInterval(interval);
  }, [selectedIndex]);

  const selectNewImage = (index: number, images: string[], next: boolean) => {
    setLoaded(false);
    setTimeout(() => {
      const nextIndex = next ? (index < images.length - 1 ? index + 1 : 0) : (index > 0 ? index - 1 : images.length - 1 );
      setSelectedIndex(nextIndex);
      setSelectedImage(images[nextIndex]);
    }, 500);
  };

  const handleSlider = (next: boolean) => {
    selectNewImage(selectedIndex, images, next);
  };

  return (
    <SliderContainer>
      <ArrowBtn className="previous" onClick={() => handleSlider(false)}/>
      <SliderImages src={`src/assets/img/${selectedImage}`} className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)}/>
      <ArrowBtn className="next" onClick={() => handleSlider(true)} />
    </SliderContainer>
  )
};

export default Slider