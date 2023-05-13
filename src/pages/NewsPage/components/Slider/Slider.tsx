import { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DIRECTION, DefaultSliderValues } from "../../models";
import { ArrowButton } from "./ArrowButton";
import { ImageSlider } from "./ImageSlider";

const SliderContainer = styled.div`
  height: 20rem;
  background-color: #9f9fa0;
  box-shadow: 0 5px 5px 2px rgb(159, 159, 160);
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 3rem;

  @media (min-width: 768px) {
    height: 30rem;
  }
`;



const images = ['img.jpg', 'img_2.jpg', 'img_3.jpg'];
export const SliderContext = createContext<DefaultSliderValues>({
  selectedIndex: 0,
  loaded: false,
  setLoaded: () => {},
  handlerSlider: () => {},
});

function Slider() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
      const interval = setInterval(() => handlerSlider(DIRECTION.NEXT), 4000);

      return () => clearInterval(interval);
  }, [selectedIndex]);

  const selectNewImage = (index: number, images: string[], direction: DIRECTION) => {
    setLoaded(false);
    setTimeout(() => {
      const nextIndex = direction === DIRECTION.NEXT ? (index < images.length - 1 ? index + 1 : 0) : (index > 0 ? index - 1 : images.length - 1 );
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const handlerSlider = (direction: DIRECTION) => {
    selectNewImage(selectedIndex, images, direction);
  };
  
  return (
    <SliderContext.Provider value={{ selectedIndex, loaded, setLoaded, handlerSlider}}>
      <SliderContainer>
        <ImageSlider images={images} />
        <ArrowButton direction={DIRECTION.PREV} />
        <ArrowButton direction={DIRECTION.NEXT} />
      </SliderContainer>
    </SliderContext.Provider>
  );
};

export default Slider
