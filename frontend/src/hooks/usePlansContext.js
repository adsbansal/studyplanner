import { PlansContext } from "../context/PlansContext";
import { useContext } from "react";

export const usePlansContext = () => {
  const context = useContext(PlansContext);

  if (!context) {
    throw Error("usePlansContext must be used inside an PlansContextProvider");
  }

  return context;
};
