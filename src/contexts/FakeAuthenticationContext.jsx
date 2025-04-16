import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";
//implemented without useReducer function to understand logic in simple way possible
const FakeAuthenticationContext = createContext();
//assume the only user in the fake backend(however there isn't any backend assume this user object stored somewhere)!
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

export default function FakeAuthenticationProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  function login(email, password) {
    //authenticate in this case! and make user navigate to somewhere!
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      setUserDetails(FAKE_USER);
      setIsAuthenticated(true);
      navigate("/app");
    }
  }
  function logout() {
    setUserDetails(null);
    navigate("/");
    setIsAuthenticated(false);
  }
  return (
    <FakeAuthenticationContext.Provider
      value={{ login, logout, userDetails, isAuthenticated }}
    >
      {children}
    </FakeAuthenticationContext.Provider>
  );
}
FakeAuthenticationProvider.propTypes = {
  children: propTypes.node,
};
export { FakeAuthenticationContext };
