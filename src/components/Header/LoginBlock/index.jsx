import React from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";

const LoginBlock = ({ isAuth, login, logoutTC }) => {
  return (
    <div className={css.loginBlock}>
      {isAuth ? (
        <>
          {login} <button onClick={logoutTC}>Log Out</button>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </div>
  );
};

export default LoginBlock;
