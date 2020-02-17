import React from "react";
import css from "./style.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login, logoutTC }) => {
  return (
    <header className={css.header}>
      <div className={css.content}>
        <div className="headerLogo">
          <a className={css.logo} href="#">
            VK
          </a>
        </div>
        <div className={css.loginBlock}>
          <img className={css.photo} />
          {isAuth ? (
            <>
              {login} <button onClick={logoutTC}>Log Out</button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
