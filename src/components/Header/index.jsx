import React from "react";
import "../../index.css";
import css from "./style.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login }) => {
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
          {isAuth ? login : <NavLink to="/login">Login</NavLink>}
        </div>
      </div>
    </header>
  );
};
export default Header;
