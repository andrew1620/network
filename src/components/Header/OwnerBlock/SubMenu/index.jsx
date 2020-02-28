import React from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";

const SubMenu = ({ logoutTC }) => {
  return (
    <div className={css.subMenu}>
      {" "}
      <NavLink to="/" className={css.item}>
        Моя страница
      </NavLink>
      <div onClick={logoutTC} className={css.item}>
        Выйти
      </div>{" "}
    </div>
  );
};
export default SubMenu;
