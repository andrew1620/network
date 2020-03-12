import React from "react";
import css from "./style.module.css";
import { NavLink } from "react-router-dom";

import Avatar from "../../../common/Avatar";

const DialogItem = ({ dialogs = [], deleteDialog }) => {
  const dialogsList = dialogs.map(dialog => {
    return (
      <NavLink
        to={`/dialogs/${dialog.id}`}
        key={dialog.id}
        className={css.navlink}
      >
        <div className={css.item}>
          <div className={css.photoBox}>
            <Avatar size="large" img={dialog.avatar} />
          </div>
          <div className={css.content}>
            <div className={css.info}>
              <div className={css.headerInfo}>
                <span className={css.name}>{dialog.name}</span>
                <span className={css.time}>{dialog.time}</span>
              </div>
              <div className={css.mainInfo}>{dialog.lastMessage}</div>
            </div>
            <div className={css.btnDel}>
              <DeleteDialog deleteDialog={() => deleteDialog(dialog.id)} />
            </div>
          </div>
        </div>
      </NavLink>
    );
  });

  return <div>{dialogsList}</div>;
};

export default DialogItem;

const DeleteDialog = ({ deleteDialog }) => {
  return (
    <NavLink to="/dialogs">
      <span className={css.symbol} onClick={deleteDialog}>
        ✕
      </span>
    </NavLink>
  );
};
