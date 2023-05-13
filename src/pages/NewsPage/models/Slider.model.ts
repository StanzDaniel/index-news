export enum DIRECTION {
  PREV = "prev",
  NEXT = "next",
};

export interface DefaultSliderValues {
  selectedIndex: number,
  loaded: boolean,
  setLoaded: (param: boolean) => void,
  handlerSlider: (direction: DIRECTION) => void,
}
