import { useContext, useEffect } from "react";
import { FakeAuthenticationContext } from "../contexts/FakeAuthenticationContext";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
function RouteProtection({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(FakeAuthenticationContext);
  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate("/", { replace: true });
      }
    },
    [(isAuthenticated, navigate)]
  );

  return isAuthenticated ? children : null;
}

RouteProtection.propTypes = {
  children: PropTypes.node,
};

export default RouteProtection;
