import { ContextTypes, News } from "@/interfaces";
import { ReactNode, createContext, useContext, useState } from "react";

const initialState = {
  contextValue: [{  source: {
    id: "",
    name: "",
  },
  author: "",
  title: "",
  description: "",
  url: "",
  urlToImage: "",
  publishedAt: "",
  content: "",}],
  setContextValue: () => {},
}

export const NewsPageContext = createContext<ContextTypes<News[]>>(initialState);

export const NewsPageProvider = ({children}: {children: ReactNode}) => {
  const [contextValue, setContextValue] = useState<News[]>(initialState.contextValue);
  return (
    <NewsPageContext.Provider value={{ contextValue, setContextValue }}>
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