import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";

const SubMenu = ({ logout, toggleShowSubMenu }) => {
  const closeSubMenu = e => {
    const target = e.target.closest("[data-name=subMenu]");
    if (!target) toggleShowSubMenu();
  };

  useEffect(() => {
    document.addEventListener("click", closeSubMenu);
    return () => document.removeEventListener("click", closeSubMenu);
  });

  return (
    <div className={css.subMenu} data-name="subMenu">
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
