export enum DIRECTION {
  PREV = "prev",
  NEXT = "next",
};

export interface DefaultSliderValues {
  images: any;
  selectedIndex: number,
  loaded: boolean,
  setLoaded: (param: boolean) => void,
  handlerSlider: (direction: DIRECTION) => void,
}
