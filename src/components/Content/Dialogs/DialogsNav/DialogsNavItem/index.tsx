import React from "react";
import css from "./style.module.css";

type Props = {
  title: string;
  isActive: boolean;
  handleClick: () => void;
};

const DialogsNavItem: React.FC<Props> = ({ title, handleClick, isActive }) => {
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
