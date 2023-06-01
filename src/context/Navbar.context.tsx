import { ContextTypes } from "@/interfaces";
import { ReactNode, createContext, useContext, useState } from "react";

const initialValues = {
  contextValue: false,
  setContextValue: () => {},
}

export const NavbarContext = createContext<ContextTypes<boolean>>(initialValues);

export const NavbarProvider = ({ children }: {children: ReactNode}) => {
  const [contextValue, setContextValue] = useState(false);
  return (
    <NavbarContext.Provider value={{ contextValue, setContextValue }}>
      { children }
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);

  if (context === undefined) {
    throw new Error('NavbarContext must be used within a NewsPageProvider');
  }
  return context;
}