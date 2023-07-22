import { ContextTypes } from "@/interfaces";
import { ReactNode, createContext, useContext, useState } from "react";

const initialState = {
  contextValue: [''],
  setContextValue: () => {},
}

export const NewsPageContext = createContext<ContextTypes<string[]>>(initialState);

export const NewsPageProvider = ({children}: {children: ReactNode}) => {
  const [contextValue, setContextValue] = useState<string[]>([]);
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