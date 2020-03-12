import React from "react";
import css from "./style.module.css";

const DialogsNavItem = ({ title, handleClick, isActive }) => {
  return (
    <div
      className={`${css.item} ${isActive && css.active}`}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default DialogsNavItem;
