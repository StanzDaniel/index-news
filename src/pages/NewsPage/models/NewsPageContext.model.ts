import { Dispatch, SetStateAction } from "react";

export interface InitialState {
  newsPageContextValue: string[],
  setNewsPageContextValue: Dispatch<SetStateAction<string[]>>,
}