import { useContext } from "react";
import { CityContext } from "../contexts/CityContext";
export function useCities() {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error(
      "Please don't try to use this hook outside the Provider's scope! "
    );
  }
  return context;
}
