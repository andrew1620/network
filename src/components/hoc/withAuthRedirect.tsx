import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { getIsAuth } from "../../redux/authSelectors";

export const withAuthRedirect = (
  Component: React.ComponentType<any>
): React.FC<any> => {
  return props => {
    const isAuth = useSelector(getIsAuth);

    return !isAuth ? <Redirect to="/login" /> : <Component {...props} />;
  };
};

// this HOC adds an ability to redirect person to LoginPage if he hasn't been authentificated.
