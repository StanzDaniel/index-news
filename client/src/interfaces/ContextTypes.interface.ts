import { Dispatch, SetStateAction } from "react";

export interface ContextTypes<T> {
  contextValue: T,
  setContextValue: Dispatch<SetStateAction<T>>,
};