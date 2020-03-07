import React from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";

const SubMenu = ({ logout }) => {
  return (
    <div className={css.subMenu}>
      <NavLink to="/" className={css.item}>
        Моя страница
      </NavLink>
      <div onClick={logout} className={css.item}>
        Выйти
      </div>
    </div>
  );
};
export default SubMenu;
