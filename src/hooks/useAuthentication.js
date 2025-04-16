import { useContext } from "react";
import { FakeAuthenticationContext } from "../contexts/FakeAuthenticationContext";
export function useAuthentication() {
  const context = useContext(FakeAuthenticationContext);
  if (context === undefined) {
    throw new Error(
      "Please don't try to use authentication state outside FakeAuthenticationContext"
    );
  }
  return context;
}
