import { createContext, useContext, useState } from "react";
import { InitialState } from "../models/NewsPageContext.model";

const initialState = {
  newsPageContextValue: [''],
  setNewsPageContextValue: () => {},
}

export const NewsPageContext = createContext<InitialState>(initialState);

export const NewsPageProvider = ({ children }: any) => {
  const [newsPageContextValue, setNewsPageContextValue] = useState<string[]>([]);
  console.log({STATE: newsPageContextValue})
  return (
    <NewsPageContext.Provider value={{ newsPageContextValue, setNewsPageContextValue }}>
      { children }
    </NewsPageContext.Provider>
  );
};

export const useNewsPageContext = () => {
  const context = useContext(NewsPageContext);

  if (context === undefined) {
    throw new Error('NewsPageContext must be used within a NewsPageProvider');
  }
  return context;
}