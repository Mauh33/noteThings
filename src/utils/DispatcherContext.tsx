import { createContext, useContext, useState } from "react";
import { DispatcherType } from "../types/interface";

const StateContext = createContext<DispatcherType | null>(null);

export const DispatcherProvider = ({ children }: any) => {
  const [isButtonVisible, setButtonVisibility] = useState<boolean>(false);
  const [isFormVisible, setFormVisibility] = useState<boolean>(false);

  const contextValue = {
    isButtonVisible,
    setButtonVisibility,
    isFormVisible,
    setFormVisibility,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): any => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a DispatcherProvider");
  }
  return context;
};
