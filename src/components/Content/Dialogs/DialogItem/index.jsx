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
            <object>
              <Avatar size="large" img={dialog.avatar} />
            </object>
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
              <object>
                {/* used object in order to fix a warning because I put <a> into <a>. I've to find another solution */}
                <span
                  className={css.symbol}
                  onClick={e => {
                    e.preventDefault();
                    deleteDialog(dialog.id);
                  }}
                >
                  ✕
                </span>
              </object>
            </div>
          </div>
        </div>
      </NavLink>
    );
  });

  return <div>{dialogsList}</div>;
};

export default DialogItem;
