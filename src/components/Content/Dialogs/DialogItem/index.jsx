import React from "react";
import css from "./style.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ dialogsData = [] }) => {
  const dialogsList = dialogsData.map(dialog => {
    return (
      <NavLink
        to={`/dialogs/${dialog.id}`}
        key={dialog.id}
        className={css.navlink}
      >
        <div className={css.item}>
          <div className={css.photoBox}>photo</div>
          <div className={css.content}>main</div>
          <div className={css.btnDel}>delete</div>
        </div>
      </NavLink>
    );
  });

  return <div>{dialogsList}</div>;
};

export default DialogItem;
