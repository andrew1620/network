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
        <div className={css.itemBox}>
          <img className={css.itemPhoto} src={dialog.img} alt="dialogPic" />
          <div style={{ width: "78%" }}>
            <div>
              <span className={css.itemName}>{dialog.name}</span>
            </div>
            <div className={css.lastMessage}>
              <img
                src="https://i09.fotocdn.net/s119/187c53d6c272f6d1/user_xl/2706836280.jpg"
                alt="lastMessPhoto"
                className={css.lastMessagePhoto}
              />
              <span>Привет</span>
            </div>
          </div>
          <div>12:33</div>
          <div>X</div>
        </div>
        <hr />
      </NavLink>
    );
  });

  return <div>{dialogsList}</div>;
};

export default DialogItem;
