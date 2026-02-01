import { ContextTypes, News } from "@/interfaces";
import { url } from "inspector";
import { ReactNode, createContext, useContext, useState } from "react";

const initialState = {
  contextValue: [{
    title: "",
    author: "",
    published_date: "",
    published_date_precision: "",
    url: "",
    clean_url: "",
    excerpt: "",
    summary: "",
    rights: "",
    rank: 0,
    topic: "",
    country: "",
    language: "",
    authors: "",
    urlToImage: "",
    is_opinion: false,
    twitter_account: "",
    _score: null,
    _id: "",
  }],
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